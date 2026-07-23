const express = require('express');
const bookController = require('../controllers/bookController');
const route = express.Router();
route.use(express.urlencoded({ extended: false }));


route.get('/books', (req, res) => {
    bookController.getBooks(req, res);
})

route.get('/add/bookpage', (req, res) => {
    bookController.getAddBook(req, res);
})

route.post('/add/book', (req, res) => {
    bookController.addBook(req, res);
})

route.get('/edit/bookpage/:id', (req, res) => {
    bookController.getEditBook(req, res);
})

route.post('/edit/book/:id', (req, res) => {
    bookController.editBook(req, res);
})

route.get('/book/delete/:id', (req, res) => { 
    bookController.deleteBook(req,res)
})

module.exports = route;