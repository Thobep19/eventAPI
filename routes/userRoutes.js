var express = require('express');

var routes = (user) => {

    var userRouter = express.Router();
    var userController = require('../controllers/userController')(user);
    console.log('userController', userController);
    //console.log(userRouter.route);
    userRouter.use('/id/:id', userController.findByIdInterceptor);

    userRouter.route('/')
        .get(userController.getAll)
        .post(userController.post);

    userRouter.route('/id/:id')
        .get(userController.findById)
        .put(userController.update)
        .patch(userController.patch)
        .delete(userController.remove);

    userRouter.route('/test').get(userController.getIsUser);

    return userRouter;
}

module.exports = routes;