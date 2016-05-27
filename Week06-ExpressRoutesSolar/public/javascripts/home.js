/**
 * Created by bcuser on 5/27/16.
 */
define (function () {
    var home = {
      init: function () {
          $('#elf-view').load('/home', function () {
          });
      }
    };
    return home;
});