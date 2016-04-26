/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function () {
    console.log("document loaded in prog 272");
    $('#read').click(callRead);
    function callRead() {
        console.log('callRead called');
        $.getJSON('/read', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));

        } )

    }

})