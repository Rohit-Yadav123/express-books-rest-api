const bookModel = require('../models/bookModel');

// Simple Function to get all books
function GetAllBooks(req, res) {
    bookModel.find({}, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
}

// Function to get specific book based on bookId
function GetBook(req, res) {
    bookModel.findOne({ _id: req.params.bookId }, (err, data) => {
        if (data !== null) {
            res.status(200).send(data);
        }
        else if (data == null) {
            res.status(404).send({ status: 404, message: `Book with specified id: ${req.params.bookId} does not exist` });
        } else {
            throw err;
        }
    })
}

// Function to add a new book in the database
function AddBook(req, res) {
    let book = new bookModel({
        Bookname: req.body.Bookname,
        Authorname: req.body.Authorname,
        Bookpublisher: req.body.Bookpublisher,
        price: req.body.price
    });
    book.save((err) => {
        if (!err) {
            res.status(201).send({ message: "Book added successfully" });
        } else {
            throw err;
        }
    });
}

// Function to delete a book based on bookId
function DeletBook(req, res) {
    bookModel.deleteOne({ _id: req.params.bookId }, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send({ message: "Book deleted successfully" });
        }
    });
}

// Function to update a book based on bookId
function UpdateBook(req, res) {
    const id1 = req.params.bookId;
    const newdata = {
        Bookname: req.body.Bookname,
        Authorname: req.body.Authorname,
        Bookpublisher: req.body.Bookpublisher,
        price: req.body.price
    }
    bookModel.findByIdAndUpdate(id1, newdata,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({ message: "Book updated successfully" });
        }
    });
    
}


module.exports = { GetAllBooks, GetBook, AddBook, DeletBook, UpdateBook };