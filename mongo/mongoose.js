var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/schoolBus');
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Connection error!');
});

db.once('open', function() {
    console.log('MongoDB is working!');
});

module.exports = mongoose;