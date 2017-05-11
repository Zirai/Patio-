var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
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

// mongoose.model('Article', articleSchema, 'article');

module.exports = mongoose.model('Article', articleSchema)
