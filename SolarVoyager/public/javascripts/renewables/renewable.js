define(function() {
    'use strict';

    function getRenewable() {
        console.log('renewable.js: getRenewable called');
        $.getJSON('renewables/renewable', function(response) {
                console.log(response);
                var renewablesList = response.renewables;
                showRenewable(renewablesList[index]);
                $('#debug').html(JSON.stringify(response, null, 4));
                //$ ('#renewableByIndex').change(function() {
                //    getRenewableByIndex();
                // });
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function() {
                console.log('second success');
            })
            .always(function() {
                console.log('complete');
            });
    }

    var index = 0;
    var year;
    var geothermal;
    var otherbiomass;
    var windpower;
    var liquidbiofuels;
    var woodbiomass;
    var hydropower;

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            index = test;
            $('#indexInput').val(index);
            showRenewable(renewable[index]);
        }
    }

    var indexButtonChange = function(event) {
        var test = event.data.value + index;
        indexChange(test);
    };

    var buttonChange = function() {
        var test = $('#indexInput').val();
        indexChange(parseInt(test));
    };

    function showRenewable(renewable) {
        renewable = getSimpleKeys(renewable);
        $('#yearView').val(renewable.year);
        $('#solarView').val(renewable.solar);
        $('#geoView').val(renewable.geothermal);
        $('#otherBiomassView').val(renewable.otherbiomass);
        $('#windView').val(renewable.windpower);
        $('#liquidBiofuelsView').val(renewable.liquidbiofuels);
        $('#woodView').val(renewable.woodbiomass);
        $('#hydropowerView').val(renewable.hydropower);
    }

    function getSimpleKeys(renewable) {
        return {
            year: renewable.Year,
            solar: renewable['Solar (quadrillion Btu)'],
            geothermal: renewable['Geothermal (quadrillion Btu)'],
            otherbiomass: renewable['Other biomass (quadrillion Btu))'],
            windpower: renewable['Wind power (quadrillion Btu)'],
            liquidbiofuels: renewable['Liquid biofuels (quadrillion Btu)'],
            woodbiomass: renewable['Wood biomass (quadrillion Btu)'],
            hydropower: renewable['Hydropower (quadrillion Btu)']
        };
    }

    var renewable = {
        init: function() {
            $('#elf-view').load('/renewables/renewable-page', function() {

                //$('#getRenewable').click(getRenewable);
                //getRenewable();
                $('#renewableByIndex').change(function() {
                    getRenewableByIndex();
                });
                $('#minusButton').click(function() {
                    $('#indexInput').val(parseInt($('#indexInput').val()) - 1);
                    buttonChange();
                });
                // $('#plusButton').click(function() {
                //     $('#indexInput').val(parseInt($('#indexInput').val()) + 1);
                //    buttonChange();
                //});
                $('#plusButton').click({
                    value: 1
                }, indexButtonChange);

                $('#indexInput').change(function() {
                    indexButtonChange();
                });
            });
        }
    };
    return renewable;
});
