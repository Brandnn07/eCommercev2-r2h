const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'emporium_db',
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("Database Connection Successful");
  });
app.use(cors());
app.use(express.json());


app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM cars', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get('/api/products/ascprice', (req, res) => {
    db.query('SELECT * FROM cars ORDER BY LENGTH(car_price), car_price', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get('/api/products/descprice', (req, res) => {
    db.query('SELECT * FROM cars ORDER BY LENGTH(car_price) DESC, car_price DESC', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get('/api/products/ascdate', (req, res) => {
    db.query('SELECT * FROM cars ORDER BY car_date ASC', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get('/api/products/descdate', (req, res) => {
    db.query('SELECT * FROM cars ORDER BY car_date DESC', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.get('/api/products/:id', (req, res) => {
    const reqId = req.params.id
    // console.log(reqId)
    db.query('SELECT * FROM cars WHERE id = ' + reqId, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(PORT, () => {
    console.log(`The server listening on port ${PORT}`)
})