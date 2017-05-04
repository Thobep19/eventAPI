var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/eventAPI');

var event = require('./models/eventModel');
var user = require('./models/userModel');

var app = express();
var port = process.env.PORT || 3000;


// cors
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

eventRouter = require('./routes/eventRoutes')(event);
userRouter = require('./routes/userRoutes')(user);

app.use('/api/events', eventRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});


