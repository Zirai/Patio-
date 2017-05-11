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

<<<<<<< HEAD
// mongoose.model('Article', articleSchema, 'article');

module.exports = mongoose.model('Article', articleSchema)
=======
module.exports = mongoose.model('Article', articleSchema);
>>>>>>> 6e816f9789cfb6c2d38d96f0e4c2e0873915b340
