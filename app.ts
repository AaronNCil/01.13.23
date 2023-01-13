const mysql = require('mysql')
const express = require('express')
const app = express();

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'type',
    password: 'iloveyou3000',
    database: 'classicmodels'
});

conn.connect((err) => {

    if (err) {
        console.log(`Can't connect to database`)
        return;
    }

    console.log(`Connection is up and running`)
})

app.get('/', (req, res) => {
    conn.query("SELECT * FROM customers", (err, result) => {
        res.send(result);
    })
})


app.listen(4000, (err, res) => {
    if(err){
        console.log("server not running");
    } else {
        console.log("running on port 4000")
    }
})