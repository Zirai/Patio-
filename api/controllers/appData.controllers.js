var db = require('../data/db.js');
var appData = require('../data/app-data.json');

// return app app data in the json
module.exports.appDataGetAll = function(req, res) {

	// **** this segment is to test if db connection is successful
	// **** aware that the return data is not queried from the database

	console.log("testing database connection: ", db);

	// **** test segment ends here

	console.log('GET the App Data json');
	res
		.status(200)
		.json(appData);
};
