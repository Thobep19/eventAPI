var mongoose = require('mongoose');

var userModel = new mongoose.Schema ({
    userFirst:{type: String},
    userLast: {type: String},
    userPassword: {type: String},
    userEmail: {type: String},
    isUser: { type: Boolean, default: true }
});

var user = mongoose.model('user',userModel)
module.exports = user;