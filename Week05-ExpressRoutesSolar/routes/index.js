var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week05-ExpressRoutesSolar-Markley'
    });
});


router.get('/renewables', function(request, response) {
    console.log('Renewables called');
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
        response.send({
            result: 'Success',
            renewables: data
        })

    });
});

router.get('/renewablesByIndex/:id', function(request, response) {
    console.log('Renewables by index called');

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {

        if (err) {
            response.send({
                result: '404'
            });
        } else {
            var json = JSON.parse(data);
            //console.log(json);
            response.send({
                result: 'Success',
                renewables: json[parseInt(request.params.id)]
            });
            // console.log(data);
        }

        /*  response.send ({ result: 'Success', renewables: data}) */
    });
});

router.get('/renewablesByYear/:id', function(request, response) {
    console.log('Renewables called by year');

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {

        if (err) {
            response.send({
                result: '404'
            });
        } else {
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
    })
});


module.exports = router;
