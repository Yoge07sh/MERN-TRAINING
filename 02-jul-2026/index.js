const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.end('<h1>Hello this side node js server...')
})
app.get('/home', (req, res) => {
    res.end('<h1> this is home page...')
})
app.get('/contact', (req, res) => {
    res.end('<h1> 7428964220')
})
app.listen(3000, (err) => {
    if (err) {
        console.log("problem to start server");
    } else {
        console.log("server is running on port 3000.....");
    }
})