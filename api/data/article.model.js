var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var articleSchema = new Schema({
    articleName : {
        type : String,
        required : true,
        unique : true
    },
    createdOn : {
        type : Date,
        "default" : Date.now
    },
    articleContent : {
        type : String,
        "default" : "blank space place holder"
    }
});

module.exports = mongoose.model('Article', articleSchema);
