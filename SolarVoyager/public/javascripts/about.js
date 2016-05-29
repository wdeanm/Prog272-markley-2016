/**
 * Created by bcuser on 5/18/16.
 */

define(function() {

    var about = {
        color: "red",
        size: "big",
        init: function() {
            console.log(about.color);
            $('#elf-view').load('/about', function() {
                $('#display').html(about.color + ' ' + about.size);
            });
        }
    };
    return about;
    
});
