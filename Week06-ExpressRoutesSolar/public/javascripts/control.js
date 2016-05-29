define(['jquery', 'home', 'about', 'renewable', 'renewablesByIndex', 'renewablesByYear'],
    function ($, home, about, renewable, renewablesByIndex, renewablesByYear) {

        function showBar() {
            $('#display2').html('bar');
        }
        var control = {
            setup: function(){
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function () {
                $('.homeMenu').click(home.init);
                $('.aboutMenu').click(about.init);
                $('.renewableMenu').click(renewable.init);
                $('.renewablesByIndexMenu').click(renewablesByIndex.init);
                $('.renewablesByYearMenu').click(renewablesByYear.init);
                home.init();
            }
        }
        return control;
    });


