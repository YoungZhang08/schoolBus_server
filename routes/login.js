var express = require('express');
var User = require('../mongo/user');
var router = express.Router();

//登录
router.use(function(req, res) {
    var un = req.query.username;
    var pd = req.query.password;

    console.log(un);

    User.findOne({'userName': un }, function(err, doc) {
            console.log(doc);
        })
});

module.exports = router;