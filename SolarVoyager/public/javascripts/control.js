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
define(['jquery', 'home', 'about', 'renewable','renewablesByIndex',
    'renewablesByYear', 'energyOverview', 'energyTypes'],
    function ($, home, about, renewable, renewablesByIndex,
              renewablesByYear, energyOverview, energyTypes) {

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
                $('.renewableMenu').click(renewable.init);
                $('.renewablesByIndexMenu').click(renewablesByIndex.init);
                $('.renewablesByYearMenu').click(renewablesByYear.init);
                $('.highTechEnergyOverviewMenu').click(energyOverview.init);
                $('.highTechEnergyTypesMenu').click(energyTypes.init);
                home.init();
            }
        }
        return control;
    });


