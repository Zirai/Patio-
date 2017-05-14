var express = require('express');
var router = express.Router();

var ctrlAppData = require('../controllers/appData.controllers.js');
var ctrlArticleData = require('../controllers/articleData.controllers.js');
var ctrlSubscriberData = require('../controllers/subscriberData.controllers.js');

router
	.route('/appData')
	.get(ctrlAppData.appDataGetAll);

router
    .route('/articleData')
    .get(ctrlArticleData.articleDataGetAll);


router
	.route('/subscribedApp')
	.get(ctrlSubscriberData.subscribedApp);
	
module.exports = router;
