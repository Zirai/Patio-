var db = require('../data/db.js');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

module.exports.articleDataGetAll = function(req, res) {
    Article
        .find()
        .exec(function(err, article) {
            console.log("Found articles", article.length);
            res
                .json(article);
        });
};

