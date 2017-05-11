var db = require('../data/db.js');
var mongoose = require('mongoose');
var Subscriber = mongoose.model('Subscriber');

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
		.exec(function(err, doc) {
			res
				.status(200)
				.json(doc);
		});
};

module.exports.subscriberDataAddOne = function(req, res) {
    // belum buat lagi :P 
};
