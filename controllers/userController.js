var userController = (user) => {

// C.R.U.D Functions
    return {
        findByIdInterceptor: (req, res, next) => {
            user.findById(req.params.id, (err, resp) => {
                console.log('from intereptor...');
                if (err) {
                    res.status(500).send(err);
                } else if (resp) {
                    req.user = resp;
                    next();
                } else {
                    res.status(404).send(err);
                }
            })
        },
        post: (req, res) => {
            user.create(req.body, (err, resp) => {
                if (err) {
                    console.log('err', err);
                    res.status(500).send(err);
                } else {
                    res.status(201).send(resp);
                }
            })
        },
        getAll: (req, res) => {
            user.find((err, resp) => {
                if (err) {
                    console.log('err', err);
                } else {
                    res.json(resp);
                }
            });
        },
        findById: (req, res) => {
            console.log('req.user', req.user);
            res.json(req.user);
        },
        patch: (req, res) => {
            let newUser = Object.assign(req.user, req.body);
            console.log('newuser', newuser);
            event.update(newuser, (err, resp) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(newUser);
                }
            });
        },
        update: (req, res) => {
            console.log('from update ....', req.user);
            user.update(req.body, (err, resp) => {
                if (err) {
                    console.log('err from update ', err);
                    res.status(500).send(err);
                } else {
                    console.log('resp from update ', resp);
                    user.findOne({ _id: req.params.id }, (err, resp) => {
                        if (!err) {
                            res.json(req.user);
                        }
                    });

                }
            });
        },
        remove: (req, res) => {
            req.user.remove((err, resp) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send({ message: 'delete success' });
                }
                });
        },
        getIsUser: (req, res) => {
            user.find({ isUser: true }, (err, resp) => {
                if (!err) {
                    res.json(resp);
                } else {
                    res.status(500).send(err);
                }
            });
        }
    }
}

module.exports = userController;