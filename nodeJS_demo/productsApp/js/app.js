/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="jquery-1.9.1-vsdoc.js" />
/// <reference path="about.js" />

//app.js
(function (app, $) {
    //Initialization
    function init() {
        //if (window.main) main.init();
        //if (window.settings) settings.init();
        if (window.about) about.init();
        //if (window.router) router.init();
    }

    $(".back-button").on("click", function () {
        //alert('clicked');
        window.history.go(-1);
        return false;
    });

    //startup
    if (window.cordova) {
        //document.addEventListener("deviceready", init, false);
    } else {
        $(document).ready(init);
    }
})(window.app = window.app || {}, $);