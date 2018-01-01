var express = require('express');
var router = express.Router();
var User = require('../mongo/user');

//登录
router.use(function(req, res, next) {
    var un = req.body.username;
    var pd = req.body.password;

    User.findOne({userName:un}, function(err, doc) {
        if(err){
            res.sendStatus(500);
            console.log(err);
        }else if(!doc){
            console.log("用户名不存在！");
            res.sendStatus(404);
        }else{
            if (doc.password === pd) {
                console.log("登录成功！");
                // res.sendStatus(200);
                res.json({
                    'status': false
                });
            }else if(doc.password !== pd){
                console.log("密码错误！");
                // res.sendStatus(404);
                res.json({
                    'status': true
                });
            }
        }   
    });

});

module.exports = router;