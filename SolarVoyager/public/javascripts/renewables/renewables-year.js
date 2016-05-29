define(function() {
    function getRenewableByYear() {
        console.log('getRenewableByYear called')
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

    var renewablesByYear = {
        color: "red",
        size: "big",
        init: function() {
            console.log(work.color);
            $('#elf-view').load('/renewablesByYear', function() {
                $('#display').html(renewablesByYear.color);
                $('#display2').html(renewablesByYear.size);
                $("#renewableByIndex").change(function () {
                    getRenewableByYear()

                })
            });
        }
    };
    return renewablesByYear;
});
