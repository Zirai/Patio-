var express = require('express');
var router = express.Router();

var ctrlAppData = require('../controllers/appData.controllers.js');

router
	.router('appData')
	.get(ctrlAppData.appDataGetAll);

module.exports = router;
