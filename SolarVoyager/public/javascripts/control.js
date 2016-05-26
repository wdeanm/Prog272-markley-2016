/*$(document).ready(function() { 'use strict';
    $ ('#getRenewable').click(getRenable)
    $ ('#getRenewableByIndex').click(getRenewableByIndex)
    $ ('#getRenewableByYear').click(getRenewableByYear)
    
    function getrenewable() {
        console.log('getRenewable called')
        $.getJSON('/renewables', function (response) {
            console.log(response);
            $('#debug').html(JSON.stringify(response,null, 4));            
        })
    }
    function getRenewableByIndex() {
        console.log('getRenewable called')
        var userInput = $('#getRenewableByIndex').val();
        $.getJSON('/renewablesByIndex' + userInput, function (response) {
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
        console.log('getRenewable called')
        var userInput = $('#getRenewableByYear').val();
        $.getJSON('/renewablesByYear' + userInput, function (response) {
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

 //   renewableByIndex
});*/

define(['jquery', 'work', 'about', 'renewables', 'renewablesbyindex', 'renewablesbyyear'], function($, work) {
    //Do setup work here

    function showBar() {
        //console.log('Show Bar Clicks called now');
        $('#display2').html('bar');
    }

    var control = {
        color: "black",
        size: "unisize",
        setup: function() {
            $(document).on('click', '#showClick', showBar);
            $('#display2').html(control.color + ' - ' + control.size);
        },
        init: function() {
            //console.log(this.color);
         //   $('#aboutButton').click(about.init);
          //  $('#workButton').click(work.init);
         //   $('#elf-view').load('/main', this.setup);
            work.init();
        }
    };

    return control;
});