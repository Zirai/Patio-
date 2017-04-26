var appData = require('../data/app-data.json');

// return app app data in the json
module.exports.appDataGetAll = function(req, res) {
	console.log('GET the App Data json');
	res
		.status(200)
		.json(appData);
};
