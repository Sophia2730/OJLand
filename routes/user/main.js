var express = require('express');
var router = express.Router();
var pool = require('../../config.js').pool;

router.get('/', function(req, res, next) {
    res.render('user/main', {
        session: req.session
    });
});

module.exports = router;