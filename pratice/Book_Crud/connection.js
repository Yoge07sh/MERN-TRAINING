const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose('mongodb://localhost:27017/praticeMern')
        console.log('DB connected successfully');
    } catch (err) {
        console.log(err);
    }
}