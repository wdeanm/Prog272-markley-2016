/**
 * Created by bcuser on 5/29/16.
 */
define (function () {
    var renewablesByIndex = {
        init: function () {
            $('#elf-view').load('/renewablesByIndex', function () {

                $ ('#getRenewablesByIndex').click(getRenewablesByIndex)

                function getRenewablesByIndex() {
                    console.log('getRenewablesByIndex called')
                    var userInput = $('#getIndex').val();
                    $.getJSON('/renewablesByIndex/' + userInput, function (response) {
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
    return renewablesByIndex;
});