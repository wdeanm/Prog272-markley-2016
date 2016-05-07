function getNine() {
    return 9;
}

function getThis() {
    return this;
}

var getThisAnonymous = function(){
    return this;
};

var myObject = function (){
    return this.getThis;
};

var myFunction = function () {
    return this;
}

$(document).ready(function() { 'use strict';
});
