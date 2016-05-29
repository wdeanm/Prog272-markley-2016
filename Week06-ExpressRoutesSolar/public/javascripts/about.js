/**
 * Created by bcuser on 5/27/16.
 */
define (function () {
    var about = {
        init: function () {
            $('#elf-view').load('/about', function () {
            });
        }
    };
    return about;
});

