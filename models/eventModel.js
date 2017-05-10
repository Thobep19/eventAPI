// Connect to Mongoose Database
var mongoose = require('mongoose');

// Event Model
var eventModel = new mongoose.Schema ({
    eventName:{type:String},
    eventDescription:{type: String},
    eventDate: {type: Date},
    eventLocation: {
        eventStreet:{type: String},
        eventCity:{type:String},
        eventZip: {type:String}
    },
    eventPrice: {type: String},
    eventStart: { type: Boolean, default: true },
    Organization: {
        organizationName: {type: String},
        organizationAddress:{type: String},
        organizationCity:{type: String},
        organizationZip:{type: String},
        organizationDescription:{type: String},
        orgainizationType:{type: String}
    },
    Organizor: {
        organizorFirstName:{type: String},
        organizorLastName:{type: String},
        organizorEmail:{type: String}
    }
});

// Variable Event Declaration Based on Event Model
var event = mongoose.model('event',eventModel)

// Exporting Event
module.exports = event;
