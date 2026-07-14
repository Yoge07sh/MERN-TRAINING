const express = require('express');
const route = express.Router();
const mobileController = require('../controllers/mobileController');

route.get('/mobiles', (req, res) => {
    mobileController.getMobiles(req, res);
});


route.get('/mobile/:id', (req, res) => {
    mobileController.getMobileById(req, res);
});


route.post('/add/mobile', (req, res) => {
    mobileController.addMobile(req, res);
});


route.put('/edit/mobile/:id', (req, res) => {
    mobileController.editMobile(req, res);
});


route.delete('/delete/mobile/:id', (req, res) => {
    mobileController.deleteMobile(req, res);
})

module.exports = route;