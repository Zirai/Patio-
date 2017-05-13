require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');

var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

// include routing for page
var routes = require('./routing');

// include the routing for api 
var apiRoute = require('./api/apiRoute');

// set the port of our application
// process.env.PORT lets the port be set by Heroku

var port = process.env.PORT || 1337;
require('./config/passport')(passport);
// set the view engine to jade 
app.set('view engine', 'jade');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use("/javascripts", express.static("./public/js"));


//set the angular directory
app.set('views', __dirname + '/views');

// add middleware to console log every request
/*
app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});
*/

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// // general page routing
// app.use('/', routes);

// routing for API
app.use('/api', apiRoute);
require('./routing/index.js')(app, passport);
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
