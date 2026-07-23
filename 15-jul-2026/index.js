const express = require('express');
const app = express();
const connect = require('./connection');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const student = require('./routes/studentRoute');
const book = require('./routes/bookRoute');
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(student);
app.use(book);
connect();


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on 3000....");
    }
})