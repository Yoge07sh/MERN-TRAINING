const Student = require('../models/Student');

const getHome = async (req, res) => {
    await res.render('home');
}

const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        console.log(req.body);
        await student.save();
        res.send("added successfully");
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getHome,
    addStudent
}