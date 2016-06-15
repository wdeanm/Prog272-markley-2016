/**
 * Created by bcuser on 5/29/16.
 */
define(function() {
    'use strict';
    var renewablesByYear = {
        init: function() {
            $('#elf-view').load('/renewables/renewables-By-Year', function() {
                $('#getRenewablesByYear').click(getRenewablesByYear);

                function getRenewablesByYear() {
                    console.log('renewablesbyYear.js: getRenewablesByYear called');
                    var userInput = $('#getYear').val();
                    console.log('user input' + userInput);
                    $.getJSON('renewables/renewablesByYear/' + userInput, function(response) {
                            console.log(response);
                            $('#debug').html(JSON.stringify(response, null, 4));
                        })
                        .done(function() {
                            console.log('second success');
                        })
                        .fail(function(a, b, c) {
                            console.log('Error, a,b,c');
                        })
                        .always(function() {
                            console.log('complete');
                        });
                }
            });
        }
    };
    return renewablesByYear;
});
