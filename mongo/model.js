var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userName: String,
    passWord: String
});

mongoose.model('users', userSchema);