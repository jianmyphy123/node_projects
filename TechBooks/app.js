var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');

const config = require('./config/database');

var index = require('./routes/index');
var books = require('./routes/books');
var manage = require('./routes/manage');
var pages = require('./routes/pages');
var cart = require('./routes/cart');

mongoose.connect(config.database, function(err) {
  if(err) {
    console.log('Not connected to database '+err);
  } else {
    console.log('Successfully connnected to MongoDB');
  }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(function(req, res, next){
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use('/', index);
app.use('/books', books);
app.use('/manage', manage);
app.use('/pages', pages);
app.use('/cart', cart);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;