/**
 * Created by bcuser on 6/15/16.
 */
var express = require('express');
var router = express.Router();
/* GET home page.
 */

router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'SolarVoyager - Markley'
    });
});

router.get('/byIndex/:id', function(request, response) {
    'use strict';
    console.log('index.js: Renewables by Index called');
});

router.get('/byYear/:id', function(request, response) {
    'use strict';
    console.log('index.js: Renewables called by year');
    var myYear = request.params.id;
});

router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
