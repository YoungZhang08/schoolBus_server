var mongoose = require('./mongoose.js');
var Schema = mongoose.Schema;

//定义用户模板的发布
var userSchema = new Schema({ //定义数据模型
    userName: String,
    passWord: String
});

//将该Schema发布为Model,第一个参数为数据库的集合，没有会自动创建
var User = mongoose.model('adminTable', userSchema);

//暴露
module.exports = User;