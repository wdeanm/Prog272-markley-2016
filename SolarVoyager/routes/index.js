var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Solar Voyager -  Markley'
    });
});

/*
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

 */
/*
router.get('/renewables/renewablesByIndexSorted/:id', function(request, response) {
  console.log('index.js: Renewables by index Sorted');

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
router.get('/high-tech-energy/energyOverview/:id', function(request, response) {
    'use strict';
    console.log('index.js: energyOverview called');
    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
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

router.get('/high-tech-energy/energyTypes/:id', function(request, response) {
    'use strict';
    console.log('index.js: energyTypes called');
    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
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

router.get('/renewables/:id', function(request, response) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

router.get('/high-tech-energy/:id', function(request, response) {
    'use strict';
    response.render('high-tech-energy/' + request.params.id, {
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
