function getNine() {
    return 9;
}

function getThis() {
    return this;
}

var getThisAnonymous = function(){
    return this;
};

var myObject = {
    getThis: function() {
        'use strict';
    return this;
    }
};

$(document).ready(function() { 'use strict';

});
