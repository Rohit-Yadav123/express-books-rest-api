const express= require('express');
const {GetAllBooks, GetBook, AddBook, DeletBook, UpdateBook}=require('../Controllers/bookController')
const router= express.Router();
// To get all the books this is extra endpoint.
router.get('/books',GetAllBooks);

// 1. An endpoint /getBook/:bookId to get a specific books
router.get('/getBook/:bookId',GetBook);
// 2. An endpoint /addBook to add a book
router.post('/addBook',AddBook);
// 3. an endpoint /updateBook/:bookId to update a book
router.put('/updateBook/:bookId',UpdateBook);
// 4. an endpoint /deleteBook/:bookId to delete a book
router.delete('/deleteBook/:bookId',DeletBook);


module.exports=router;