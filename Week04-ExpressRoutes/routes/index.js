var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Markley 4/25/2016' });
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

