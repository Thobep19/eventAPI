// Mongoose Database
var mongoose = require('mongoose');

// User Model
var userModel = new mongoose.Schema ({
    userFirst:{type: String},
    userLast: {type: String},
    userPassword: {type: String},
    userEmail: {type: String},
    userType: {type: String},
    isUser: { type: Boolean, default: true }
});

// Variable User Declaration Based on User Model
var user = mongoose.model('user',userModel)

// Exporting User
module.exports = user;