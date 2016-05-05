var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week05-ExpressRoutesSolar-Markley' });
});

router.get('/renewables', function(request, response) {
  console.log('Renewables called');

  fs.readFile('data/Renewable.json', 'utf8', function (err, data) {

    if (err){
      response.send ({ result: '404'});
    }
    else {
      console.log(data);
    }

  /*  response.send ({ result: 'Success', renewables: data}) */

  })
  response.send({ result: 'Success'});
});

module.exports = router;
