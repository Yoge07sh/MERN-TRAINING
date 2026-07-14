const Student = require('../models/Student');

const addStudent = async (req, res) => {
    try {
        console.log("adding student");
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.send("we are in progress to add student")
    } catch (err) {
        console.log(err);
    }
}
const getStudents = async (req, res) => {
    try {
        let students = await Student.find({});
        console.log(students);
        res.send(students);
    } catch (err) {
        console.log(err);
    }
}
const getStudentByRollno = async (req, res) => {
    try {
        let Rollno = req.params.Rollno;
        let student = await Student.findOne({ Rollno: Rollno });
        res.send(student);

    } catch (err) {
        console.log(err);
    }
}
const editStudent = async (req, res) => {
    try {
        let Rollno = req.params.Rollno;
        let student = await Student.findOne({ Rollno: Rollno });
        if (student) {
            student.fatherName = "mohan das";
            await student.save();
            res.send("student have been update succsefullly");
            console.log(student);

        } else {
            console.log("student not found");
        }
    } catch (err) {
        console.log(err);
    }
}
const deleteStudent = async (req, res) => {
    try {
        let Rollno = req.params.Rollno;
        let student = await Student.deleteOne({ Rollno: Rollno });
        res.send(student);

    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentByRollno,
    editStudent,
    deleteStudent
}