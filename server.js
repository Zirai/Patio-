// require('./api/data/dbconnection.js').open();
require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
<<<<<<< HEAD
var bodyParser = require('body-parser');
=======
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
>>>>>>> 6e816f9789cfb6c2d38d96f0e4c2e0873915b340

// include routing for page
var routes = require('./routing');

// include the routing for api 
var apiRoute = require('./api/apiRoute');

// proper routing  here
var routes = require('./routing');

// set the port of our application
// process.env.PORT lets the port be set by Heroku

var port = process.env.PORT || 1337;

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

// passport config
var User = require('./api/data/user.model');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// general page routing
app.use('/', routes);

// routing for API
app.use('/api', apiRoute);

// BELOW ARE PAGE ROUTINGS
/*

// use body-parser
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

// use routing for page
app.use('/', routes);

// routing for API 
app.use('/api', apiRoute);

/*
// set the home page route

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/index', function(req, res) {
	res.render('index');
});

app.get('/apps', function(req, res) {
	res.render('apps');
});

app.get('/article', function(req, res) {
	res.render('article');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/signup', function(req, res) {
    res.render('signup');
});
*/


app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
