var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    }, 
    password : {
        type : String,
        required : true
    }
});

// mongoose.model('User', userSchema, 'user');

mongoose.model('User', userSchema);

