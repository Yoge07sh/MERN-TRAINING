const express = require('express');
const route = express.Router();
const studentController = require('../controllers/studentController');
route.post('/add/student', (req, res) => {
    studentController.addStudent(req, res);
})
route.get('/students', (req, res) => {
    studentController.getStudents(req, res);
})
route.get('/student/:Rollno', (req, res) => {
    studentController.getStudentByRollno(req, res);
})
route.put('/edit/student/:Rollno', (req, res) => {
    studentController.editStudent(req, res);
})
route.delete('/delete/student/:Rollno', (req, res) => {
    studentController.deleteStudent(req, res);
})
module.exports = route;