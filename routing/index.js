var express = require('express');
var User = require('../api/data/user.model');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Subscriber = require('../api/data/subscriber.model');
var Subscriber = mongoose.model('Subscriber');

module.exports = function(app, passport) {
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

	app.get('/loginPage', function(req, res) {
	    res.render('login');
	});

	// app.post('/login', function(req, res) {
	// 	if(!req.body.username || !req.body.password || !req.body || req.body === null || req.body.password === null || req.body.username === null)
	// 	{
	// 		return res.send("You left out some field blank! Please fill in the field!");
	// 	}
		
	// 	var find = User.findOne(req.body).exec();

	// 		find
	// 		.then(function(data){
	// 			// if(user) {
	// 				// console.log("got user lo wei");
	// 				// res.send(user);
	// 			// }
	// 			// else {
	// 				// console.log("no user lo wei");
	// 				// res.send("no user");
	// 			// }
	// 			if(data === null) res.json("Null data");
	// 			else res.send(data);
	// 		})
	// 		.catch(function(err){
	// 			// console.log("got error lo wei");
	// 			res.send(err);
	// 		}); 
	// });

	app.post('/login', passport.authenticate('local-login', {
        // successRedirect : '/', // redirect to the secure profile section
        // failureRedirect : '/loginPage', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }), function(req, res){
		res.send(req.user)
    });

    app.post('/androidLogin', passport.authenticate('local-login'), function(req, res){
    	res.send(req.user);
    });

	app.get('/subscribePage', function(req, res) {
		res.render('subscribe');
	});

	app.post('/subscribe', function(req, res) {
		var username = req.body.username;
	    var appName = req.body.appName;
		if(!req.body.username || !req.body.appName || !req.body || req.body === null || req.body.username === null || req.body.appName === null) 
		{
			return res.json("You left out some field blank! Please fill in the field!");
		}
		Subscriber.create(req.body)
			.then(function(subs){
				return res.json("Successfully subscribed!");
			})
			.catch(function(err){
				return res.json(err);
			}); 
	});

	app.post('/unsubscribe', function(req, res) {
		var username = req.body.username;
	    var appName = req.body.appName;
		if(!req.body.username || !req.body.appName || !req.body || req.body === null || req.body.username === null || req.body.appName === null) 
		{
			return res.json("You left out some field blank! Please fill in the field!");
		}
		Subscriber.remove(req.body)
			.then(function(subs){
				return res.json("Successfully unsubscribed!");
			})
			.catch(function(err){
				return res.json(err);
			}); 
	});

	app.get('/signupPage', function(req, res) {
	   res.render('signup');
	});

	app.post('/signup', passport.authenticate('local-signup', {
        // successRedirect : '/', // redirect to the secure profile section
        // failureRedirect : '/signupPage', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

	// app.post('/signup', function(req, res) {
	//     var username = req.body.username;
	//     var password = req.body.password;
	// 	if(!req.body.username || !req.body.password || !req.body || req.body === null || req.body.password === null || req.body.username === null)
	// 	{
	// 		return res.json("You left out some field blank! Please fill in the field!");
	// 	}
	// 	User.create(req.body)
	// 		.then(function(user){
	// 			return res.json("Successfully signed up!");
	// 		})
	// 		.catch(function(err){
	// 			return res.json(err);
	// 		});
	// });

	app.get('/logout', function(req, res) {
	    req.logout();
	    res.redirect('/');
	});





};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

