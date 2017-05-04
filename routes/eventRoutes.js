var express = require('express');

var routes = (event) => {

    var eventRouter = express.Router();
    var eventController = require('../controllers/eventController')(event);
    console.log('eventController', eventController);
    //console.log(bookRouter.route);
    eventRouter.use('/id/:id', eventController.findByIdInterceptor);

    eventRouter.route('/')
        .get(eventController.getAll)
        .post(eventController.post);

    eventRouter.route('/id/:id')
        .get(eventController.findById)
        .put(eventController.update)
        .patch(eventController.patch)
        .delete(eventController.remove);

    eventRouter.route('/test').get(eventController.getEventStart);

    return eventRouter;
}

module.exports = routes;