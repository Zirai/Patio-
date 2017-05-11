var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriberSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    appName : {
        type : String,
        required : true
    }
});

mongoose.model('Subscriber', subscriberSchema);