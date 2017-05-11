var express = require('express');
var router = express.Router();

var ctrlAppData = require('../controllers/appData.controllers.js');
var ctrlUserData = require('../controllers/userData.controllers.js');
var ctrlArticleData = require('../controllers/articleData.controllers.js');

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


module.exports = router;
