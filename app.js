var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');              // mongoose for mongodb
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var database = require('./config/database');
// var port     = process.env.PORT || 8888;         // set the port
var app = express();
mongoose.connect(database.url);     // connect to mongoDB database on modulus.io

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client/src')));
app.use('/scripts', express.static(path.join(__dirname, './node_modules')));
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

// app.listen(port, '0.0.0.0');
// console.log("App listening on port : " + port);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
