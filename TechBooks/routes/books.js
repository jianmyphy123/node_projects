var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/details/:id', function(req, res) {
  Book.findOne({_id: req.params.id}, function(err, book) {
    if(err) {
      console.log(err);
    } else {
      res.render('books/details', {
        book: book
      });
    }
  });

});

module.exports = router;
