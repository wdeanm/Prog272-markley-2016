<<<<<<< HEAD:Week06-ExpressRoutesSolar/public/javascripts/control.js
$(document).ready(function() { 'use strict';
    $ ('#getRenewable').click(getRenewables)
    function getrenewable() {
=======
$(document).ready(function() {
    'use strict';
    $ ('#getRenewable').click(getRenewable)
    $ ('#getRenewableByIndex').click(getRenewableByIndex)
    $ ('#getRenewableByYear').click(getRenewableByYear)

    function getRenewable() {
>>>>>>> 1555713677a57d2701d85741ba115a2c7dbacf3a:Week05-ExpressRoutesSolar/public/javascripts/control.js
        console.log('getRenewable called')
        $.getJSON('/renewables', function(response) {
            console.log(response);
            $('#debug').html(JSON.stringify(response, null, 4));
        })
    }

    function getRenewableByIndex() {
        console.log('getRenewableByIndex called')
        var userInput = $('#getIndex').val();
        $.getJSON('/renewableByIndex/' + userInput, function (response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response,null, 4));
            })
            .done(function () {
                console.log('second success')
            })
            .fail(function (a,b,c) {
                console.log('Error, a,b,c')
            })
            .always(function () {
                console.log('complete')
            })
    }

    function getRenewableByYear() {
        console.log('getRenewableByYear called')
        var userInput = $('#getYear').val();
        console.log('user input' + userInput)
        $.getJSON('/renewableByYear/' + userInput, function (response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response,null, 4));
            })
            .done(function () {
                console.log('second success')
            })
            .fail(function (a,b,c) {
                console.log('Error, a,b,c')
            })
            .always(function () {
                console.log('complete')
            })
    }
});
