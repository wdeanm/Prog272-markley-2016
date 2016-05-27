/**
 * Created by bcuser on 5/27/16.
 */

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        home: 'javascripts/home',
        about: 'javascripts/about',
        renewable: 'javascripts/renewable',
        renewablesByIndex: 'javascripts/renewablesByIndex',
        renewablesByYear: 'javascripts/renewablesByYear'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});