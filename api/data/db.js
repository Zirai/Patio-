var mongoose = require('mongoose');
var dburl = 'mongodb://ziraiadmin:buttcheeks@patio-shard-00-00-e3qqn.mongodb.net:27017,patio-shard-00-01-e3qqn.mongodb.net:27017,patio-shard-00-02-e3qqn.mongodb.net:27017/patio?ssl=true&replicaSet=Patio-shard-0&authSource=admin';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination(SIGINT)');
        process.exit(0);
    });
});

// for use in heroku
process.on('SIGTERM', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination(SIGTERM)');
        process.exit(0);
    });
});

process.once('SIGUSR2', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination(SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

// bring in schemas and models
require('./app.model.js');
require('./article.model.js');
require('./user.model.js');
