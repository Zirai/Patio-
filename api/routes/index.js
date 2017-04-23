var express = require('express');
var router = express.Router();

var ctrlAppData = require('../controllers/appData.controllers.js');

router
	.route('/appData')
	.get(ctrlAppData.appDataGetAll);

module.exports = router;
