const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');
const BookSchema = new Schema({
    _id: {
        type: String,
        required: true,
        default: uuidv4()
    },
    Bookname: {
        type: String,
        required: true
    },
    Authorname: {
        type: String,
        required: true
    },
    Bookpublisher: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema, 'Books');

// In above line
// 1st parameter is Model name
// 2nd parameter is Book Schema
// 3rd paramter is Collection name