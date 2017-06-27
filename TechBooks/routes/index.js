var express = require('express');
var router = express.Router();
var Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  Book.find({}, function(err, books) {
    if(err) {
      console.log(err);
    } else {
      books.forEach(function(book) {
        book.truncText = book.truncText(50);
      })
      res.render('index', {
        books: books
      });
    }
  });
});

module.exports = router;
