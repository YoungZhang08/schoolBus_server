var mongoose = require('./mongoose.js');
var Schema = mongoose.Schema;

//定义所有车辆信息的发布
var busSchema = new Schema({
    busNum: String,
    busDriver: String,
    startTime: Array,
    endTime: Array,
    isBack: Boolean,
    goFrequency: Int32Array,
    count: Int32Array
});

var user = mongoose.model('bus', busSchema);

//暴露
module.exports = busSchema;