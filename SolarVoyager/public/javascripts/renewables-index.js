define(function() {
    function getRenewableByIndex() {
        console.log('getRenewableByIndex called')
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

    var renewablesbyindex = {
        color: "red",
        size: "big",
        init: function() {
            console.log(work.color);
            $('#elf-view').load('/renewablesByIndex', function() {
                $('#display').html(renewablesByIndex.color);
                $('#display2').html(renewablesByIndex.size);
                $("#renewableByIndex").change(function () {
                    getRenewableByIndex()

                })
            });
        }
    };
    return renewablesbyindex;
});
