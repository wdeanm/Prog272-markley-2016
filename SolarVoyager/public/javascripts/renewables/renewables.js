/**
 * Created by bcuser on 5/29/16.
 */
define (function () {
    var renewable = {
        init: function () {
            $('#elf-view').load('/renewables/renewable', function () {
                $ ('#getRenewables').click(getRenewables)
                function getRenewables() {
                    console.log('getRenewables called')
                    $.getJSON('/renewables', function(response) {
                        console.log(response);
                        $('#debug').html(JSON.stringify(response, null, 4));
                    })
                }
            });
        }
    };
    return renewable;
});
