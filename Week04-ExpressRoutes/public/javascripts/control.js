/**
 * Created by bcuser on 4/25/16.
 */

$(document).ready(function () {
    console.log("document loaded in prog 272");

    $('#read').click(read);
    $('#readJson').click(readJson)
    $('#readQux').click(readQux)
    $('#add').click(add)

    function add() {
        var operatorA = $('#operatorA').val();
        var operatorB = $('#operatorB').val();
        console.log("operators: ", operatorA, operatorB);
        var requestQuery ={operatorA: operatorA, operatorB: operatorB};

        $.getJSON('/add', requestQuery, function(sum) {
            console.log("sum " + sum);
            $('#display').html(JSON.stringify(sum));
        })
    }
    function read() {
        console.log('callRead called');
        $.getJSON('/read', function(result){
            console.log(result);
            $('#display').html('The sum is: ' + sum.sum);
        } )
    }

    function readJson() {
        console.log('callRead called');
        $.getJSON('name.json', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));

        } )
    }

    function readQux() {
        console.log('callQux called');
        $.getJSON('/qux', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));

        } )
    }

    $(document).ready(function () {
        'use strict';
        $.getJSON('/renewables', function (response) {
            console.log(response);
        })
            .done(function () {
                console.log("second success");
            })
            .fail(function (a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function () {
                console.log("complete");
            });
    });
})