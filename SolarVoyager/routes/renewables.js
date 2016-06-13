/**
 * Created by bcuser on 6/13/16.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/renewables/renewable', function(request, response) {
    'use strict';
    console.log('index.js: Renewable called');
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {

        if (err) {
            response.send({
                result: '404'
            });
        } else {
            var json = JSON.parse(data);
            console.log(json);
            response.send({
                result: 'Success',
                renewables: json
            });
            console.log(data);
        }
    });
});

router.get('/renewables/renewablesByIndex/:id', function(request, response) {
    'use strict';
    console.log('index.js: Renewables by Index called');
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            response.send({
                result: '404'
            });
        } else {
            var json = JSON.parse(data);
            console.log(json);
            response.send({
                result: 'Success',
                renewables: json[parseInt(request.params.id)]
            });
            console.log(json[parseInt(request.params.id)]);
        }
    });
});

router.get('/renewables/renewablesByYear/:id', function(request, response) {
    'use strict';
    console.log('index.js: Renewables called by year');
    var myYear = request.params.id;

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {

        if (err) {
            response.send({
                result: '404'
            });
        } else {
            /**
             * Created by bcuser on 6/6/16.
             */
            var json = JSON.parse(data);
            for (var i = 0; i < json.length; i++) {
                if (request.params.id === json[i].Year) {
                    response.send({
                        result: 'Success',
                        renewables: json[i]
                    });
                    return;
                }
            }
            response.send({
                result: 'Failure'
            });
        }
    });
});

router.get('/renewables/:id', function(request, response) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;