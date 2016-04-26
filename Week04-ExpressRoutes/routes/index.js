var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Markley 4/25/2016' });
});

router.get('/read', function(request, response) {
  response.send([
    {"name": "SaraLee"},
    {"name": "Bob"}
  
  ]);
});
module.exports = router;

