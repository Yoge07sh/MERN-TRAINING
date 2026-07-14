const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    Rollno: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Student', StudentSchema);