/**
 * Created by bcuser on 6/6/16.
 */
var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        var url= 'mongodb://127.0.0.1:27017/test';
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    mlabConnect:function() {
        connect.connected = true;
        var userName = 'AdminMarkley';
        var password = '2ToTwain';
        var siteAndPort = 'ds025263.mlab.com:25263';
        var databaseName = 'prog272-markley';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(useSimple) {
        var connectType = useSimple || false;
        if (connectType) {
            connect.simpleConnect();
        } else {
            connect.mlabConnect();
        }
    }
};

module.exports = connect;