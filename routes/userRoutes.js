var express = require('express');

var routes = (user) => {

    var userRouter = express.Router();
    var userController = require('../controllers/userController')(user);
    console.log('userController', userController);

// Router to Find a User by ID
    userRouter.use('/id/:id', userController.findByIdInterceptor);

// Router to GetAll and Post All Data
    userRouter.route('/')
        .get(userController.getAll)
        .post(userController.post);

// Router to Get, Put, Patch, and Delete
    userRouter.route('/id/:id')
        .get(userController.findById)
        .put(userController.update)
        .patch(userController.patch)
        .delete(userController.remove);

// Router to test if a User exists
    userRouter.route('/test').get(userController.getIsUser);

    return userRouter;
}

// Export Routes
module.exports = routes;