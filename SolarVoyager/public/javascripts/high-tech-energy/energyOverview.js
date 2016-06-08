/**
 * Created by bcuser on 6/6/16.
 */
/**
 * Created by bcuser on 5/29/16.
 */
define (function () {

    function getEnergyOverview() {
        console.log('getEnergyOverview.js: getEnergyOverview called')
        $.getJSON('high-tech-energy/energy-overview', function(response) {
            console.log(response);
            energyOverviewList = response.high-tech-energy;
            showenergy-overview(energyOverviewList[index]);
            //  $('#debug').html(JSON.stringify(response, null, 4));
            $('#energyOverviewByIndex').change(function() {
                getenergyOverviewByIndex();
            });
        })
    }

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            index = test;
            $('#indexInput').val(index);
            showenergy-overview(energyOverviewList[index]);
        }
    }

    var indexButtonChange = function(event) {
        var test = event.data.value + index;

        indexChange(test);
    };

    var buttonChange = function() {
        var test = $('#indexInput').val();
        indexChange(parseInt(test));
    };

    function getSimpleKeys(hightechenergy) {
        return {
            MSN: hightechenergy["MSN"],
            YYYYMM: hightechenergy["YYYYMM"],
            Value: hightechenergy["Value"],
            Column_order: hightechenergy["Column_order"],
            Description: hightechenergy["Description"],
            Unit: hightechenergy["Unit"]
        }
    }

    function showRenewable(hightechenergy) {
        hightechenergy = getSimpleKeys(hightechenergy);
        $('#MSNView').val(hightechenergy.MSN);
        $('#YYYYMMView').val(hightechenergy.YYYYMM);
        $('#ValueView').val(hightechenergy.Value);
        $('#ColumnOrderView').val(hightechenergy.Column_order);
        $('#DescriptionView').val(hightechenergy.Description);
        $('#UnitView').val(hightechenergy.Unit);
    }

    var hightechenergy = {
        init: function () {
            $('#elf-view').load('/high-tech-energy/energy-overview-page', function () {

                $ ('#getEnergyOverview').click(getEnergyOverview)
                getEnergyOverview();

            });
        }
    };
    return hightechenergy;
});