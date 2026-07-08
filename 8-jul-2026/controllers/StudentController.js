const students = require('../student.json');
const fs = require('fs');
const getStudents = (req, res) => {
    try {
        res.json(students);
    } catch (err) {
        console.log(err);
    }
}
const getStudentByRollno = (req, res) => {
    try {
        const Rollno = req.params.Rollno;
        const student = students.find(student => student.Rollno == Rollno);
        res.json(student);
    } catch (err) {
        console.log(err);
    }
}
const addStudent = (req, res) => {
    try {
        console.log(req.body);
        students.push(req.body);
        fs.writeFile('student.json', JSON.stringify(students), (err) => {
            if (err) {
                consolr.log("not added");
            } else {
                console.log("added successfully");
            }
        })

    } catch (err) {
        console.log(err);
    }
}
const updateStudent = (req, res) => {
    try {
        const Rollno = req.params.Rollno;
        const index = students.findIndex(student => student.Rollno == Rollno);
        console.log(index);
        students[index].email = "ys@gmail.com";
        fs.writeFile('student.json', JSON.stringify(students), (err) => {
            if (err) {
                res.end("not updated")
            } else {
                res.end("updated");
            }
        })
    } catch (err) {
        console.log(er)
    }
}
const deleteStudent = (req, res) => {
    try {
        const Rollno = req.params.Rollno;
        const index = students.findIndex(student => student.Rollno == Rollno);
        students.splice(index, 1);
        fs.writeFile('student.json', JSON.stringify(students), (err) => {
            if (err) {
                res.end("not deleted");
            } else {
                res.end("deleted");
            }
        })

    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getStudents,
    getStudentByRollno,
    addStudent,
    updateStudent,
    deleteStudent
}