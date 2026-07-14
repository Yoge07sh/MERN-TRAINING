const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MobileSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    design: {
        type: String,
        required: true
    },
    screenSize: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mobile', MobileSchema);