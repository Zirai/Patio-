require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());

// general page routing
app.use('/', routes);

// routing for API
app.use('/api', apiRoute);

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
