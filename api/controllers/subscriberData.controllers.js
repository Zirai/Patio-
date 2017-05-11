var db = require('../data/db.js');
var mongoose = require('mongoose');
var Subscriber = mongoose.model('Subscriber');
var App = mongoose.model('App');

/*
module.exports.subscriberDataGetAll = function(req, res) {
    Subscriber
        .find()
        .exec(function(err, subs) {
            console.log("Found subscribers", subs.length);
            res
                .json(subs);
        });
};
*/

module.exports.subscriberDataGetOne = function(req, res) {
    var username = req.params.username;
	console.log('GET Username', username);
	
	Subscriber
		.find({'username': username})
		.then(function(subscriptions){
			var arr = [];
			for(var a = 0; a < subscriptions.length; a ++){
				console.log(a);
				arr.push(subscriptions[a].appName);
			}
			App
				.find({ 'appName': { $in :arr } })
				.then(function(app){
					res.send(app);
				})
		})
		.catch(function(err){
			res.send(err);
		})
};

module.exports.subscriberDataAddOne = function(req, res) {
    // belum buat lagi :P 
};
