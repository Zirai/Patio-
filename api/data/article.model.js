var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

mongoose.model('Article', articleSchema);
