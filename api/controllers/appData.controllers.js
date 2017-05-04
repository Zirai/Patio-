var db = require('../data/db.js');
// var appData = require('../data/app-data.json');
var mongoose = require('mongoose');
var App = mongoose.model('App');

// return app data in the json
module.exports.appDataGetAll = function(req, res) {

	// **** this segment is to test if db connection is successful
	// **** aware that the return data is not queried from the database

	// console.log("testing database connection: ", db);

	// **** test segment ends here
    /*
	console.log('GET the App Data json');
	res
		.status(200)
		.json(appData);
    */
    App
        .find()
        .exec(function(err, app) {
            console.log("Found apps", app.length);
            res
                .json(app);
        });
};

module.exports.appDataGetOne = function(req, res) {
    // belum buat lagi :P
};

module.exports.appDataAddOne = function(req, res) {
    // belum buat lagi :P
};
