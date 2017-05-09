// Connect to Mongoose Database
var mongoose = require('mongoose');

// Event Model
var eventModel = new mongoose.Schema ({
    eventDescription:{type: String},
    eventDate: {type: Date},
    eventLocation: {type: String},
    eventPrice: {type: Number},
    eventStart: { type: Boolean, default: true },
    Organization: {
        organizationName: {type: String},
        organizationLocation:{type: String},
        organizationDescription:{type: String},
        orgainizationType:{type: String}
    },
    Organizor: {
        organizorName:{type: String},
        organizorFirstName:{type: String},
        organizorLastName:{type: String},
        organizorEmail:{type: String}
    }
});

// Variable Event Declaration Based on Event Model
var event = mongoose.model('event',eventModel)

// Exporting Event
module.exports = event;
