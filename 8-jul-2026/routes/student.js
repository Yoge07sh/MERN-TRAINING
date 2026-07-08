const express = require('express');
const students = require('../student.json');
const route = express.Router();
const fs = require('fs');
route.get('/students', (req, res) => {
})
route.get('/students/:Rollno', (req, res) => {
})
route.post('/add/student', (req, res) => {
})
route.put('/update/student/:Rollno', (req, res) => {
})
route.delete('/delete/student/:Rollno', (req, res) => {
})
module.exports = route;