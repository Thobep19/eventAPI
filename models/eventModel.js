var mongoose = require('mongoose');

var eventModel = new mongoose.Schema ({
    eventDescription:{type: String},
    eventDate: {type: Date},
    eventLocation: {type: String},
    eventPrice: {type: Number},
    eventStart: { type: Boolean, default: true }
});

var event = mongoose.model('event',eventModel)
module.exports = event;
