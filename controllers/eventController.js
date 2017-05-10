var eventController = (event) => {

// C.R.U.D Functions
    return {
        findByIdInterceptor: (req, res, next) => {
            event.findById(req.params.id, (err, resp) => {
                console.log('from intereptor...');
                if (err) {
                    res.status(500).send(err);
                } else if (resp) {
                    req.event = resp;
                    next();
                } else {
                    res.status(404).send(err);
                }
            })
        },
        post: (req, res) => {
            event.create(req.body, (err, resp) => {
                if (err) {
                    console.log('err', err);
                    res.status(500).send(err);
                } else {
                    res.status(201).send(resp);
                }
            })
        },
        getAll: (req, res) => {
            event.find((err, resp) => {
                if (err) {
                    console.log('err', err);
                } else {
                    res.json(resp);
                }
            });
        },
        findById: (req, res) => {
            console.log('req.event', req.event);
            res.json(req.event);
        },
        patch: (req, res) => {
            let newEvent = Object.assign(req.event, req.body);
            console.log('newevent', newevent);
            event.update(newevent, (err, resp) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(newEvent);
                }
            });
        },
        update: (req, res) => {
            console.log('from update ....', req.event);
            event.update(req.body, (err, resp) => {
                if (err) {
                    console.log('err from update ', err);
                    res.status(500).send(err);
                } else {
                    console.log('resp from update ', resp);
                    event.findOne({ _id: req.params.id }, (err, resp) => {
                        if (!err) {
                            res.json(req.event);
                        }
                    });

                }
            });
        },
        remove: (req, res) => {
            req.event.remove((err, resp) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send({ message: 'delete success' });
                }
                });
        },
        getEventStart: (req, res) => {
            event.find({ eventStart: true }, (err, resp) => {
                if (!err) {
                    res.json(resp);
                } else {
                    res.status(500).send(err);
                }
            });
        }
    }
}

module.exports = eventController;