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
    }
});

<<<<<<< HEAD
// mongoose.model('App', appSchema, 'app');

module.exports = mongoose.model('App', appSchema)
=======
module.exports = mongoose.model('App', appSchema);
>>>>>>> 6e816f9789cfb6c2d38d96f0e4c2e0873915b340
