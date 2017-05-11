var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
//var User = require('../api/data/user.model');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.render('index');
});

router.get('/apps', function(req, res) {
    res.render('apps');
});

router.get('/article', function(req, res) {
    res.render('article');
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', function(req, res) {
	if(!req.body.username || !req.body.password || !req.body)
	{
		res.send("You left out some field blank! Please fill in the field!");
	}
	
	User.find({'username': req.body.username})
		.then(function(user){
			if(user) {
				if(req.body.password === user.password) {
					res.send(user);
				}
			}
			else {
				res.send("Error Occured!");
			}
		})
		.catch(function(err){
			res.send(err);
		});
});

router.post('/androidLogin', function(req, res) {
	
	if(!req.body.username || !req.body.password || !req.body)
	{
		res.send("You left out some field blank! Please fill in the field!");
	}
	
	var find = User.findOne(req.body).exec();

		find
		.then(function(data){
			// if(user) {
				// console.log("got user lo wei");
				// res.send(user);
			// }
			// else {
				// console.log("no user lo wei");
				// res.send("no user");
			// }
			if(data === null) res.json("Null data");
			else res.send(data);
		})
		.catch(function(err){
			// console.log("got error lo wei");
			res.send(err);
		});
});

router.get('/signup', function(req, res) {
   res.render('signup');
});

router.post('/signup', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
	if(!req.body.username || !req.body.password || !req.body) 
	{
		return res.json("You left out some field blank! Please fill in the field!");
	}
	User.create(req.body)
		.then(function(user){
			return res.json("Successfully signed up!");
		})
		.catch(function(err){
			return res.json(err);
		});
});

module.exports = router;
