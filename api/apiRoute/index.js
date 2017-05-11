var express = require('express');
var router = express.Router();

var ctrlAppData = require('../controllers/appData.controllers.js');
var ctrlUserData = require('../controllers/userData.controllers.js');
var ctrlArticleData = require('../controllers/articleData.controllers.js');
var ctrlSubscriberData = require('../controllers/subscriberData.controllers.js');

router
	.route('/appData')
	.get(ctrlAppData.appDataGetAll);

/*    
router
    .route('/userData')
    .get(ctrlUserData.userDataGetAll);
*/

router
    .route('/articleData')
    .get(ctrlArticleData.articleDataGetAll);

/*
router
	.route('/subscriberData')
	.get(ctrlSubscriberData.subscriberDataGetAll);
*/

router
	.route('/subscriber/:username')
	.get(ctrlSubscriberData.subscriberDataGetOne);
	
module.exports = router;
