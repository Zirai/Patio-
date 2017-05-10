var mongoose = require('mongoose');

var appSchema = new mongoose.Schema({
    appName : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String
    },
    createdOn : {
        type : Date,
        "default" : Date.now
    }
});

mongoose.model('App', appSchema, 'app');
