var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    prot: 3306,
    database: 'ojland'
});

router.get('/', function(req, res, next) {
    var user;
    connection.connect();
    connection.query('SELECT * FROM user', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            user = rows;
            res.render('mypage');
        } else
            console.log('Error while performing Query.', err);
    });
    connection.end();
});

router.post('/', function(req, res, next) {
});

module.exports = router;
