const express = require('express');
const users = require('./users.json');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.end("<h1> welcome to our server,we are ready to serve you..");
})
app.get('/users', (req, res) => {
    res.json(users);

})
app.get('/user/:id', (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.json(user);
})
app.post('/add/user', (req, res) => {
    console.log(req.body);
    res.end("we are going to add one more user in file");
})
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on 3000...");
    }
})