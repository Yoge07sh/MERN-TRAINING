const express = require('express');
const users = require('../users.json');
const router = express.Router();
router.get('/', (req, res) => {
    res.end("<h1> welcome to our server,we are ready to serve you..");
})
router.get('/users', (req, res) => {
    res.json(users);
})
router.get('/user/:id', (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.json(user);
})
router.post('/add/user', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.log("problem in writting file ");
        } else {
            console.log("file have been written successfully..")

        }
    })
})
router.put('/edit/user/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    let index = users.findIndex((user) => user.id == id);
    console.log(index);
    users[index].email = "Yogesh@gmail.com";
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.log("problem in writting file ");
        } else {
            res.end("file have been written successfully..")
        }
    })
})
router.delete('/delete/user/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    let index = users.findIndex((user) => user.id == id);
    console.log(index);
    users.splice(index, 1);
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.log("problem in deleting file ");
        } else {
            res.end("user  have been deleted successfully..")
        }
    })
})
module.exports = router;