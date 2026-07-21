const express = require('express');
const route = express.Router();
route.use(express.urlencoded({ extended: false }));
const studentController = require('../controllers/studentController')

route.get('/', (req, res) => {
    studentController.getHome(req, res);
})

route.get('/students', (req, res) => {
    studentController.getStudents(req, res);
})

route.post('/add/student', (req, res) => {
    studentController.addStudent(req, res);
})

route.get('/student/edit/page/:id', (req, res) => {
    studentController.getStudentForEdit(req, res);
})
route.post('/edit/student/:id', (req, res) => {
    studentController.editStudent(req, res);
})

route.get('/student/delete/:id', (req, res) => { 
    studentController.deleteStudent(req,res)
})
module.exports = route; 