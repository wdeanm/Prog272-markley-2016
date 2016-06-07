requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        home: 'javascripts/home',
        about: 'javascripts/about',
        renewable: 'javascripts/renewables/renewable',
        renewablesByIndex: 'javascripts/renewables/renewablesByIndex',
        renewablesByYear: 'javascripts/renewables/renewablesByYear',

        energyoverview: 'javascripts/high-tech-energy/energy-overview',
        energytypes: 'javascripts/high-tech-energy/energy-types'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});