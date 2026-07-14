const Mobile = require('../models/Mobile');

// function to get all mobiles data
const getMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find({});
        if (mobiles) {
            console.log(mobiles);
            res.send(mobiles);
        } else {
            res.send("no mobiles are available");
        }
    } catch (err) {
        console.log(err);
    }
}

//find a single mobile by id
const getMobileById = async (req, res) => {
    try {
        const id = req.params.id;
        let mobile = await Mobile.findOne({ id: id });
        if (mobile) {
            console.log(mobile);
            res.send(mobile);
        } else {
            res.send("no mobile available with this id");
        }
    } catch (err) {
        console.log(err);
    }
}


//add a new mobile in the data 
const addMobile = async (req, res) => {
    try {
        console.log(req.body);
        const mobile = new Mobile(req.body);
        await mobile.save();
        res.send("added successfully");
    } catch (err) {
        console.log(err);
    }
}

//edit mobile price 
const editMobile = async (req, res) => {
    try {
        const id = req.params.id;
        const mobile = await Mobile.findOne({ id: id });
        if (mobile) {
            mobile.price = 15000;
            res.send("update successfully");
        } else {
            res.send("no mobile available with this id");
        }
    } catch (err) {
console.log(err);
    }
}

//delete mobile data by id
const deleteMobile = async (req, res) => {
    try {
        const id = req.params.id;
        const mobile = await Mobile.deleteOne({ id: id });
        res.send("deleted successfully");
    } catch (err) {
console.log(err);
    }
}


module.exports = {
    getMobiles,
    getMobileById,
    addMobile,
    editMobile,
    deleteMobile
}