const express = require('express');
const app = express();
const fs = require('fs');
const user= require('./routes/user');
app.use(user);
const faculty = require('./routes/faculty');
app.use(faculty);
app.use(express.json());
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on 3000...");
    }
})