const express = require('express');
const books = require('../book.json');
const route = express.Router();
const fs = require('fs');
route.get('/books',(req,res)=> {
    res.json(books);
})
route.get('/book/:bookId',(req,res)=> {
    const bookId = req.params.bookId;
    console.log(bookId)
    const book = books.find(book => book.bookId == bookId);
    res.json(book);
})
route.post('/add/book',(req,res)=> {
    console.log(req.body);
    books.push(req.body);
    fs.writeFile('book.json',JSON.stringify(books),(err)=>{
        if(err) {
            res.end("not added");
        } else {
            res.end("added succcesfully ");
        }
    })
})




module.exports = route;