var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku

var port = process.env.PORT || 1337;

// set the view engine to ejs
app.set('view engine', 'jade');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});
app.get('/index', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.get('/apps', function(req, res) {

	res.render('apps');
});

app.get('/article', function(req, res) {

	res.render('article');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

