function getNine() {
    return 9;
}

function getThis() {
    return this;
}

var getThisAnonymous = function(){
    return this;
};

<<<<<<< HEAD
var myObject = function (){
    return this.getThis;
=======
var myObject = {
    getThis: function() {
        'use strict';
    return this;
    }
};

var myFunction = {
    getThis: function() {
        'use strict';
        return this;
    }
>>>>>>> week06
};
function MyFunction() {
    'use strict'
    MyFunction.prototype.getThis = function ()

    {
      return this;
    }
};

function getThisStrict(){
    'use strict'
    return this;
}


var myFunction = function () {
    return this;
}

$(document).ready(function() { 'use strict';

});
