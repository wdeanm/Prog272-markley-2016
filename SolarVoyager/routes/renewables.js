/**
 * Created by bcuser on 6/1/16.
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(request, response) {
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

    });
});

router.get('/byIndex/:id', function(request, response) {
    console.log('Renewables by index called');

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

        /*  response.send ({ result: 'Success', renewables: data}) */
    });
});

router.get('/byYear/:id', function(request, response) {
    console.log('Renewables called by year');
    var myYear = request.params.id;

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

router.get('byIndexSorted/:id', function(request, response) {
    console.log('Renewables by index Sorted');

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