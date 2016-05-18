requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        work: 'javascripts/work',
        about: 'javascripts/about',
        funcObj: 'javascripts/func-obj'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', "control", 'work', 'about', 'funcObj'], function(bootstrap, control, work, about, funcObj) {
        control.init();
    });
});

/*


 */