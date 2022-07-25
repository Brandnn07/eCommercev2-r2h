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


app.get('/', (req, res) => {
    db.query('SELECT * FROM cars', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Good to go!')
        }
    })
});

app.listen(PORT, () => {
    console.log(`The server listening on port ${PORT}`)
})