var mongoose = require('mongoose');

var appSchema = new mongoose.Schema({
    appName : {
        type : String,
        required : true,
        unique : true
    },
    image : {
	url : String
    },
    createdOn : {
        type : Date,
        "default" : Date.now
    }
});

mongoose.model('App', appSchema, 'app');
