var db = require('../data/db.js');
var mongoose = require('mongoose');
var Subscriber = mongoose.model('Subscriber');
var App = mongoose.model('App');

module.exports.subscribedApp = function(req, res) {
	console.log('GET Username', username);
	
	Subscriber
		.find({'username': req.user.username})
		.then(function(subscriptions){
			var arr = [];
			for(var a = 0; a < subscriptions.length; a ++){
				console.log(a);
				arr.push(subscriptions[a].appName);
			}
			App
				.find({ 'appName': { $in :arr } })
				.then(function(app){
					res.json(app);
				})
		})
		.catch(function(err){
			res.json(err);
		})
};
