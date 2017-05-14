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


app.use(morgan('dev'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());

app.use(session({ secret: 'patio' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/api', apiRoute);
require('./routing/index.js')(app, passport);
app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
