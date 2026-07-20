const Student = require('../models/Student');
const getHome = (req, res) => {
    res.render('home');
}

const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        console.log(req.body);
        await student.save();
        res.render('addStudentSuccess');
    } catch (err) {
        console.log(err);
    }
}
const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.render('studentList.ejs', {
            students: students
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getHome,
    addStudent,
    getStudents
}