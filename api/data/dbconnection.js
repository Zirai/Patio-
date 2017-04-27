var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://ziraiadmin:buttcheeks@patio-shard-00-00-e3qqn.mongodb.net:27017,patio-shard-00-01-e3qqn.mongodb.net:27017,patio-shard-00-02-e3qqn.mongodb.net:27017/patio?ssl=true&replicaSet=Patio-shard-0&authSource=admin';

var _connection = null;

var open = function() {
    MongoClient.connect(dburl, function(err, db) {
        if(err) {
            console.log("DB connection failed");
            return;
        }
        _connection = db;
        console.log("DB connection open", db);
    });
};

var get = function() {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};