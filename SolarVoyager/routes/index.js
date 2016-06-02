var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  'use strict';
  res.render('index', {
    title: 'Solar Voyager -  Markley'
  });
});

/*
router.get('/renewables/renewable', function(request, response) {
  console.log('Renewables called');module.exports = router;
  fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
outer.get('/renewables/renewable', function(request, response) {
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
*/
/*
router.get('/renewables/renewablesByIndex/:id', function(request, response) {
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

    
  });
});


 */

/*
router.get('/renewables/renewablesByYear/:id', function(request, response) {
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


 */

/*
router.get('/renewables/renewablesByIndexSorted/:id', function(request, response) {
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
    }module.exports = router;

  });
});

*/

/*

router.get('/renewables/renewablesByIndex/:id', function(request, response) {
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
      console.log(json[parseI
nt(request.params.id)]);
    }

    
  });
});

*/


/*

router.get('/renewables/renewablesByYear/:id', function(request, response) {
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

*/

/*
router.get('/renewables/renewablesByIndexSorted/:id', function(request, response) {
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


router.get('/:id', function(request, response) {
  response.render('renewables/' + request.params.id, { title: 'ElfComponent' });
});
*/


module.exports = router;