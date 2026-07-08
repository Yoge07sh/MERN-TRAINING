const express = require('express');
const app = express();
app.use(express.json());  
const students = require('./routes/student');
app.use(students);
const books = require('./routes/book');
app.use(books);
app.listen(3000, (err) => {
    if (err) {
        console.log("error in running server")
    } else {
        console.log("server is running..");
    }
}) 