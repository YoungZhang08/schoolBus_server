var express = require('express');
var User = require('../mongo/user');
var router = express.Router();

//登录
router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.userName,
        password: req.body.password
    }, function(err, result) {
        if (result == null) {
            res.json({
                'status': false
            });
        } else {
            res.json({
                'status': true
            });
        }
    });
});

module.exports = router;