var mysql = require('mysql');
var express = require('express');
var app = express();
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'type',
    password: 'iloveyou3000',
    database: 'classicmodels'
});
conn.connect(function (err) {
    if (err) {
        console.log("Can't connect to database");
        return;
    }
    console.log("Connection is up and running");
});
app.get('/', function (req, res) {
    conn.query("SELECT * FROM customers", function (err, result) {
        res.send(result);
    });
});
app.post('/');
app.listen(4000, function (err, res) {
    if (err) {
        console.log("server not running");
    }
    else {
        console.log("running on port 4000");
    }
});
