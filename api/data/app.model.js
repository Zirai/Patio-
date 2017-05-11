var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
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
    },
    link : {
        type : String
    }
});

// mongoose.model('App', appSchema, 'app');

mongoose.model('App', appSchema);

