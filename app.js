var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

//////////////////////////////////
///customizing by osc
var mainRouter = require('./routes/main');
var createRouter = require('./routes/create');
var readRouter = require('./routes/read');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');
//////////////////////////////////
//////////////////////////////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.engine('html',require('ejs').renderFile);
//app.set('view engine','html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//////////////////////////////////
///customizing by osc/////////////
app.use('/main', mainRouter);
app.use('/createItem', createRouter);
app.use('/readItem', readRouter);
app.use('/updateItem', updateRouter);
app.use('/deleteItem', deleteRouter);
//////////////////////////////////
//////////////////////////////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


////////Config to get Post Parameter///////////////
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
/////////////////////////////////////////////////////

module.exports = app;