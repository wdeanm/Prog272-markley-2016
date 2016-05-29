var express = require('express');
var router = express.Router();
var fs = require('fs');
//var json = JSON.parse(data);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Markley 4/25/2016' });
});

      fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
        if (err) {
          // response.send(err, 404);
          response.status(404).send(err);
        } else {
          var json = JSON.parse(data);
        //  console.log(json);
          response.send({result: 'Success', renewables: json});
        }
      });

router.get('/read', function(request, response) {
  console.log('Read was called on router')
  response.send([
    {"name": "SaraLee"},
    {"name": "Bob"}
  ]);
});

router.get('/qux', function(request, response) {
  console.log('Qux was called on router')
  response.send([
    {"name": "LeeQux"},
    {"name": "BobQux"}
  ]);
});

router.get('/add', function (request, response) {
  console.log('add method called');
  console.log('the parameters are: ', request.query);
  console.log('operatorA is: ', request.query.operatorA);
  var operatorA = parseInt(request.query.operatorA);
  var operatorB = parseInt(request.query.operatorB);
  response.send({sum: operatorA + operatorB});
})

router.get('/:id', function(request, response) {
  response.send(request.params.id);
});

module.exports = router;

