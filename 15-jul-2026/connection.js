const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mern2026frontend');
        console.log("data base connected successfully");
    } catch (err) {
        console.log(err);
    }
}
module.exports = connect;