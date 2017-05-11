// Connect to Mongoose Database
var mongoose = require('mongoose');

// Event Model
var eventModel = new mongoose.Schema({
    eventName: { type: String },
    eventDescription: { type: String },
    eventDate: { type: String },
    eventTime: { type: String },
    eventStreet: { type: String },
    eventCity: { type: String },
    eventZip: { type: String },
    eventPrice: { type: String },
    organizationName: { type: String },
    organizationAddress: { type: String },
    organizationCity: { type: String },
    organizationZip: { type: String },
    organizationDescription: { type: String },
    orgainizationType: { type: String },
    organizorFirstName: { type: String },
    organizorLastName: { type: String },
    organizorPhone: { type: String },
    organizorEmail: { type: String }
});

// Variable Event Declaration Based on Event Model
var event = mongoose.model('event', eventModel)

// Exporting Event
module.exports = event;
