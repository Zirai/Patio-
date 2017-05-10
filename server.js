// require('./api/data/dbconnection.js').open();
require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');

// include the routing for api 
var apiRoute = require('./api/apiRoute');

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
app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

// routing for API 
app.use('/api', apiRoute);

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

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

