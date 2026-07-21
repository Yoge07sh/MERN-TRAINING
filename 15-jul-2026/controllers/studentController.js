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
        res.render('studentList', {
            students: students
        });
    } catch (err) {
        console.log(err);
    }
}
const getStudentForEdit = async (req, res) => {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ _id: id });
        res.render('studenteditpage', {
            student: student
        });
    } catch (err) {
        console.log(err);
    }
}
const editStudent = async (req, res) => {
    let id = req.params.id;
    console.log(req.body);
    let student = await Student.findOne({ _id: id });
    student.rollno = req.body.rollno;
    student.studentName = req.body.studentName;
    student.fatherName = req.body.fatherName;
    student.adharCardNo = req.body.adharCardNo;
    student.mobileNo = req.body.mobileNo;
    await student.save();
    const students = await Student.find({});
    res.render('studentList', { students: students });
}
const deleteStudent = async (req, res) => {
    try {
        let id = req.params.id;
        await Student.deleteOne({ _id: id })
        const students = await Student.find({});
        res.render('studentList', {
            students: students
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getHome,
    addStudent,
    getStudents,
    getStudentForEdit,
    editStudent,
    deleteStudent
}