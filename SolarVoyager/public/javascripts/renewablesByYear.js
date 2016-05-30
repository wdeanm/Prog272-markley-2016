/**
 * Created by bcuser on 5/29/16.
 */
define (function () {
    var renewablesByYear = {
        init: function () {
            $('#elf-view').load('/renewablesByYear', function () {

                $ ('#getRenewablesByYear').click(getRenewablesByYear)

                function getRenewablesByYear() {
                    console.log('getRenewablesByYear called')
                    var userInput = $('#getYear').val();
                    console.log('user input' + userInput)
                    $.getJSON('/renewablesByYear/' + userInput, function (response) {
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
        }
    };
    return renewablesByYear;
});