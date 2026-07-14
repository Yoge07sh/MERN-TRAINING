const express = require('express');
const app = express();
const connect = require('./connection');
const student = require('./routes/studentRoute');
const mobile = require('./routes/mobileRoute');
app.use(express.json());
connect();
app.use(student);
app.use(mobile);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on 3000....");
    }
})