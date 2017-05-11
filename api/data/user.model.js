var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< HEAD
=======
var passportLocalMongoose = require('passport-local-mongoose');
>>>>>>> 6e816f9789cfb6c2d38d96f0e4c2e0873915b340

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

<<<<<<< HEAD
// mongoose.model('User', userSchema, 'user');

mongoose.model('User', userSchema)
=======
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
>>>>>>> 6e816f9789cfb6c2d38d96f0e4c2e0873915b340
