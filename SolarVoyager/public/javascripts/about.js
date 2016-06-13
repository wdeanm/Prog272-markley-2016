/**
 * Created by bcuser on 5/29/16.
 */
define(function() {
    'use strict';
    var about = {
        init: function() {
            $('#elf-view').load('/about', function() {});
        }
    };
    return about;
});
