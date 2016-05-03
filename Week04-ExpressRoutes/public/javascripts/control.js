/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function () {
    console.log("document loaded in prog 272");

    $('#read').click(read);
    $('#readJson').click(readJson)
    $('#readQux').click(readQux)


    function read() {
        console.log('callRead called');
        $.getJSON('/read', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
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
})