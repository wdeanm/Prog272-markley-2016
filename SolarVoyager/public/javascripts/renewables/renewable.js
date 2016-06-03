/**
 * Created by bcuser on 5/29/16.
 */
define (function () {

    function getRenewable() {
        console.log('renewable.js: getRenewable called')
        $.getJSON('renewables/renewable', function(response) {
            console.log(response);
            $('#debug').html(JSON.stringify(response, null, 4));
        })
    }

    var renewable = {
        init: function () {
            $('#elf-view').load('/renewables/renewable-page', function () {

                $ ('#getRenewable').click(getRenewable)
                getRenewable();

            });
        }
    };
    return renewable;
});