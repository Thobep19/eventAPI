var express = require('express');

var routes = (event) => {

    var eventRouter = express.Router();
    var eventController = require('../controllers/eventController')(event);
    console.log('eventController', eventController);

// Router to Find an Event by ID
    eventRouter.use('/id/:id', eventController.findByIdInterceptor);

// Router to GetAll and Post All Data
    eventRouter.route('/')
        .get(eventController.getAll)
        .post(eventController.post);

// Router to Get, Put, Patch, and Delete
    eventRouter.route('/id/:id')
        .get(eventController.findById)
        .put(eventController.update)
        .patch(eventController.patch)
        .delete(eventController.remove);
// Router to test if a Event has started
    eventRouter.route('/test').get(eventController.getEventStart);

    return eventRouter;
}

// Export Routes
module.exports = routes;