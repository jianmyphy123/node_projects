var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'portfolio'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
	connection.query('select * from projects', function(err, rows, fields) {
		if(err) throw err;
		res.render('dashboard', {
			rows: rows,
      layout: 'layout2'
		});
	});
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/new', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var service = req.body.service;
  var client = req.body.client;
  var projectdate = req.body.projectdate;

  // Check Image
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

  req.checkBody('title', 'Title field is required.').notEmpty();
  req.checkBody('service', 'Service field is required.').notEmpty();

  var errors = req.validationErrors();
  if(errors) {
    res.render('new', {
      errors: errors,
      title: title,
      description: description,
      service: service,
      client: client
    });
  } else {
    var project = {
      title: title,
      description: description,
      service: service,
      client: client,
      date: projectdate,
      image: mainImageName
    }

    console.log(project);

    var query = connection.query('insert into projects set ?', project, function(err, result) {

    });

    req.flash('success', 'Project Added');

    res.location('/admin');
    res.redirect('/admin');
  }
});

router.get('/edit/:id', function(req, res, next) {
	connection.query('select * from projects where id = '+req.params.id, function(err, rows, fields) {
		if(err) throw err;
		res.render('edit', {
			row: rows[0],
      layout: 'layout2'
		});
	});
});

router.post('/edit/:id', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var service = req.body.service;
  var client = req.body.client;
  var projectdate = req.body.projectdate;

  // Check Image
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

  req.checkBody('title', 'Title field is required.').notEmpty();
  req.checkBody('service', 'Service field is required.').notEmpty();

  var errors = req.validationErrors();
  if(errors) {
    res.render('new', {
      errors: errors,
      title: title,
      description: description,
      service: service,
      client: client
    });
  } else {
    var project = {
      title: title,
      description: description,
      service: service,
      client: client,
      date: projectdate,
      image: mainImageName
    }

    console.log(project);

    var query = connection.query('update projects set ? where id='+req.params.id, project, function(err, result) {

    });

    req.flash('success', 'Project Updated');

    res.location('/admin');
    res.redirect('/admin');
  }
});

router.delete('/delete/:id', function(req, res) {
  connection.query('delete from projects where id='+req.params.id, function(err, result) {
    if(err) throw err;
  });

  res.json({success: 'success', message: 'Project Deleted'});
})

module.exports = router;
