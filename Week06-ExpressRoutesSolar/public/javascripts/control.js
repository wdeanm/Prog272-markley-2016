define(['jquery', 'home', 'about', 'renewable', 'renewablesByIndex', 'renewablesByYear'], 
    function ($, home, about, renewable, renewablesByIndex, renewablesByYear) {
        
    function showBar() {
        $('#display2').html('bar');
    }
    var control = {
        setup: function(){
            $(document).on('click', '#showClick', showBar);
            $('#display2').html(control.color + ' - ' + control.size);
        },
        init: function () {
            $('.homeMenu').click(home.init);
            $('.aboutMenu').click(about.init);
            $('.renewable').click(renewable.init);
            $('.renewablesByIndexMenu').click(renewablesByIndex.init);
            $('.renewablesByYearMenu').click(renewablesByYear.init);            
            home.init();
        }
    }
    return control;
});
    



/*$(document).ready(function() {
    'use strict';
    $ ('#getRenewable').click(getRenewable)
    $ ('#getRenewableByIndex').click(getRenewableByIndex)
    $ ('#getRenewableByYear').click(getRenewableByYear)

    function getRenewable() {
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
});*/
