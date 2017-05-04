var db = require('../data/db.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.userDataGetAll = function(req, res) {
    User
        .find()
        .exec(function(err, user) {
            console.log("Found users", user.length);
            res
                .json(user);
        });
};

module.exports.userDataGetOne = function(req, res) {
    // belum buat lagi :P 
};

module.exports.userDataAddOne = function(req, res) {
    // belum buat lagi :P 
};
