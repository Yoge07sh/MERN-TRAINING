const express = require('express');
const route = express.Router();
route.use(express.urlencoded({ extended: false }));
const studentController = require('../controllers/studentController')

route.get('/', (req, res) => {
    studentController.getHome(req, res);
})

route.get('/students', (req, res) => { 
    studentController.getStudents(req,res);
})

route.post('/add/student', (req, res) => {
    studentController.addStudent(req, res);
})
module.exports = route; 