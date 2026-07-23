const Book = require('../models/Book')

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.render('booklist', {
            books: books
        });
    } catch (err) {
        console.log(err);
    }
}

const getAddBook = (req, res) => {
    try {
        res.render('addbook');
    } catch (err) {
        console.log(err);
    }
}

const addBook = async (req, res) => {
    try {
        console.log(req.body);
        const book = new Book(req.body);
        await book.save();
        res.render('addbooksuccess')
    } catch (err) {
        console.log(err);
    }
}

const getEditBook = async (req, res) => {
    try {
        const id = req.params.id;
        let book = await Book.findOne({ _id: id });
        res.render('bookeditpage', {
            book: book
        })
    } catch (err) {
        console.log(err);
    }
}

const editBook = async (req, res) => {
    try {
        let id = req.params.id;
        console.log(req.body);
        let book = await Book.findOne({ _id: id });
        book.bookId = req.body.bookId;
        book.bookName = req.body.bookName;
        book.price = req.body.price;
        await book.save();
        const books = await Book.find({});
        res.render('booklist', { books: books });
    } catch (err) {

    }
}

const deleteBook = async (req, res) => {
    try {
        let id = req.params.id;
        await Book.deleteOne({ _id: id })
        const books = await Book.find({});
        res.render('booklist', { books: books });
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getBooks,
    getAddBook,
    addBook,
    getEditBook,
    editBook,
    deleteBook
}