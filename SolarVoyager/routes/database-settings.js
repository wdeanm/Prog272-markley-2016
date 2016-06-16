// CODE OMITTED HERE

var settings = require('../models/settings');

// CODE OMITTED HERE

function saveSettings(request, response) {
    'use strict';
    console.log('request body', request.body);

    var newSettings = new Settings({
        'keyNote': 'settings',
        'dataSource': request.body.dataSource,
        'dataType': request.body.dataType,
        'comment': request.body.comment
    });

    console.log('inserting', newSettings.comment);

    newSettings.save(function(err) {
        console.log('saved: ', newSettings.dataSource, newSettings.dataType, newSettings.comment);
        response.send({
            result: 'success',
            query: request.body
        });

    });
}

router.post('/updateSettings', function(request, response) {
    'use strict';
    console.log('request body', request.body);
    if (!connect.connected) {
        connect.doConnection();
    }

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                saveSettings(request, response);
            } else {
                doc.dataType = request.body.dataType;
                doc.dataSource = request.body.dataSource;
                doc.comment = request.body.comment;
                doc.save();
                response.send({
                    result: 'success',
                    query: request.body
                });
            }
        }
    });
});

router.get('/getSettings', function(request, response) {
    'use strict';
    console.log('request body', request.body);
    if (!connect.connected) {
        connect.doConnection();
    }

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                response.send({
                    Settings: {
                        dataType: 'Database',
                        dataSource: 'Local MongoDb',
                        comment: 'Default Comment'
                    }
                });
            } else {
                response.send({
                    Settings: doc
                });
            }
        }
    });
});
