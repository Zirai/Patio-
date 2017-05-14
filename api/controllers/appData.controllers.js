var db = require('../data/db.js');
var mongoose = require('mongoose');
var App = mongoose.model('App');

module.exports.appDataGetAll = function(req, res) {

    App
        .find()
        .exec(function(err, app) {
            console.log("Found apps", app.length);
            res
                .json(app);
        });
};
