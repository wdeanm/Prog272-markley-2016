define(function() {
    var renewables = {
        color: "red",
        size: "big",
        init: function() {
            console.log(work.color);
            $('#elf-view').load('/work', function() {
                $('#display').html(work.color + ' ' + work.size);
            });
        }
    };
    return work;
});

