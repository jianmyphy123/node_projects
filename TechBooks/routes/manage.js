var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('manage/index');

});

router.get('/books', function(req, res) {

  Book.find({}, function(err, books) {
    if(err) {
      console.log(err);
    } else {
      res.render('manage/books/index', {
        books: books
      });
    }
  });
});

router.get('/categories', function(req, res) {
  Category.find({}, function(err, categories) {
    if(err) {
      console.log(err);
    } else {
      res.render('manage/categories/index', {
        categories: categories
      });
    }
  });
});

router.get('/books/add', function(req, res) {
  Category.find({}, function(err, categories) {
    if(err) {
      console.log(err);
    }
    console.log(categories);
    res.render('manage/books/add', {
      categories: categories
    });
  })
});

router.post('/books', function(req, res) {
  var title = req.body.title;
  var category = req.body.category;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var price = req.body.price;
  var description = req.body.description;
  var cover = req.body.cover;

  if(title == '' || price == '') {
    req.flash('error', 'Please fill out required fields');
    res.location('/manage/books/add');
    res.redirect('/manage/books/add');
    return;
  }

  if (isNaN(price)) {
    req.flash('error', 'Price must be a number');
    res.location('/manage/books/add');
    res.redirect('/manage/books/add');
    return;
  }

  var newBook = new Book({
    title: title,
    category: category,
    author: author,
    publisher: publisher,
    price: price,
    description: description,
    cover: cover
  });

  newBook.save(function(err) {
    if(err) {
      console.log(err);
    }

    req.flash('success', 'Book Added');
    res.location('/manage/books');
    res.redirect('/manage/books');
  })
});

router.get('/books/edit/:id', function(req, res){
  Category.find({}, function(err, categories) {
    Book.findOne({_id: req.params.id}, function(err, book) {
      if(err)
        console.log(err);
      res.render('manage/books/edit', {
        book: book,
        categories: categories
      })
    })
  })
});

router.post('/books/edit/:id', function(req, res) {
  var title = req.body.title;
  var category = req.body.category;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var price = req.body.price;
  var description = req.body.description;
  var cover = req.body.cover;

  console.log(req.body);

  Book.update({_id: req.params.id},{
    title: title,
    category: category,
    author: author,
    publisher: publisher,
    price: price,
    description: description,
    cover: cover
  }, function(err) {
    if(err)
      console.log(err);
    req.flash('success', 'Book updated');
    res.location('/manage/books');
    res.redirect('/manage/books');
  });

});

router.delete('/books/delete/:id', function(req, res) {
  Book.remove({_id: req.params.id}, function(err){
    if(err)
      console.log(err);
    req.flash('success', 'Book Deleted');
    res.json({succes: 'success'});
  })
});

router.get('/categories/add', function(req, res) {
    res.render('manage/categories/add');
});

router.post('/categories', function(req, res) {
  var name = req.body.name;

  if(name == '') {
    req.flash('error', 'Please fill out required fields');
    res.location('/manage/categories/add');
    res.redirect('/manage/categories/add');
    return;
  }

  var newCategory = new Category({
    name: name
  });

  newCategory.save(function(err) {
    if(err) {
      console.log(err);
    }

    req.flash('success', 'Category Added');
    res.location('/manage/categories');
    res.redirect('/manage/categories');
  })
});

router.get('/categories/edit/:id', function(req, res){
  Category.findOne({_id: req.params.id}, function(err, category) {
    if(err)
      console.log(err);
    res.render('manage/categories/edit', {
      category: category
    })
  })
});

router.post('/categories/edit/:id', function(req, res) {
  var name = req.body.name;

  Category.update({_id: req.params.id},{
    name: name
  }, function(err) {
    if(err)
      console.log(err);
    req.flash('success', 'Category updated');
    res.location('/manage/categories');
    res.redirect('/manage/categories');
  });

});

router.delete('/categories/delete/:id', function(req, res) {
  Category.remove({_id: req.params.id}, function(err){
    if(err)
      console.log(err);
    req.flash('success', 'Category Deleted');
    res.json({succes: 'success'});
  })
});

module.exports = router;
