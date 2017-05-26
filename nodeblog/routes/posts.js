var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

router.get('/show/:id', function(req, res, next) {
  var posts = db.get('posts');
  posts.findOne({_id: req.params.id}, function(err, post) {
    res.render('show', {
      post: post
    });
  });
});

router.get('/add', function(req, res, next) {
  var categories = db.get('categories');

  categories.find({}, {}, function(err, categories) {
    res.render('addpost', {
      title: 'Add Post',
      categories: categories
    });
  });


});

router.post('/add', function(req, res, next) {

  var title       = req.body.title;
  var category    = req.body.category;
  var body        = req.body.body;
  var author      = req.body.author;
  var date        = new Date();

  var file = req.files[0];
  if(file != undefined) {

    var mainImageOriginalName = file.originalname;
    var mainImageName = file.filename;
    var mainImageMime = file.mimetype;
    var mainImagePath = file.path;
    var mainImageSize = file.size;

  } else {
    var mainImageName = 'noimage.png';
  }

  // Form Validation
  req.checkBody('title', 'Title field is required.').notEmpty();
  req.checkBody('body', 'Body field is required.').notEmpty();

  // Check Errors
  var errors = req.validationErrors();

  if(errors) {
    res.render('addpost', {
      errors: errors,
      title: title,
      body: body,
      categories: []
    });
  } else {
    var posts = db.get('posts');

    // Submit to DB
    posts.insert({
      title: title,
      category: category,
      body: body,
      date: date,
      author: author,
      mainimage: mainImageName
    }, function(err, post) {
      if(err) {
        res.send('There was an issue submitting the post');
      } else {
        req.flash('success', 'Post Submitted');
        res.location('/');
        res.redirect('/');
      }
    });
  }
});

router.post('/addcomment', function(req, res, next) {

  var name        = req.body.name;
  var email       = req.body.email;
  var body        = req.body.body;
  var postid      = req.body.postid;
  var commentdate = new Date();

  // Form Validation
  req.checkBody('name', 'Name field is required.').notEmpty();
  req.checkBody('email', 'Email field is required.').notEmpty();
  req.checkBody('email', 'Email is not formatted correctly.').isEmail();
  req.checkBody('body', 'Body field is required.').notEmpty();

  // Check Errors
  var errors = req.validationErrors();

  if(errors) {
    var posts = db.get('posts');
    posts.findOne({_id: postid}, function(err, post) {
      res.render('show', {
        errors: errors,
        post: post
      });
    });

  } else {
    var comment = {name: name, email: email, body: body, commentdate: commentdate};

    var posts = db.get('posts');

    posts.update({
      _id: postid
    }, {
      $push: {
        comments: comment
      }
    }, function(err, doc) {
      req.flash('success', 'Comment Added');
      res.location('/posts/show/'+postid);
      res.redirect('/posts/show/'+postid);
    });
  }
});

module.exports = router;
