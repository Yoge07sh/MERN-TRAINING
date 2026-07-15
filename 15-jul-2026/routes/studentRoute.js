const express = require('express');
const route = express.Router();
const studentController = require('../controllers/studentController')
route.get('/', (req, res) => {
    studentController.getHome(req, res);
})

route.post('/add/student', (req, res) => {
    studentController.addStudent(req, res);
})
module.exports = route;