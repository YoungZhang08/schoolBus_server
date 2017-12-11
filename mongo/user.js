var mongoose = require('./mongoose.js');
var Schema = mongoose.Schema;

//定义用户模板的发布
var userSchema = new Schema({
    userName: String,
    passWord: String
});

var User = mongoose.model('user', userSchema);

//暴露
module.exports = User;