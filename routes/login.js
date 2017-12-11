var express = require('express');
var User = require('../mongo/user');
var router = express.Router();

//登录
router.post('/login', function(req, res, next) {
    User.find({
        username: req.body.userName
    }).exec(function(err, result) {

        if (result[0].password === req.body.password) {
            req.session.userName = username;
            res.json({
                'status': true
            });
        } else {
            res.json({
                'status': false
            });
        }
    });
});

module.exports = router;