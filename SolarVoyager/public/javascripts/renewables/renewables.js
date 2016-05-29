define(function() {
    function getRenewable() {
        console.log('getRenewable called')
        $.getJSON('/renewables', function (response) {
            console.log(response);
            $('#debug').html(JSON.stringify(response,null, 4));
        })
    }

    var renewables = {
        color: "red",
        size: "big",
        init: function() {
            console.log(renewables.color);
            $('#elf-view').load('/renewables-page', function() {
                $('#display').html(renewables.color + ' ' + renewables.size);
                getRenewable();
            });
        }
    };
    return renewables;
});

