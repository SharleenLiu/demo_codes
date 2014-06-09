/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="jquery-1.9.1-vsdoc.js" />

//about.js
(function (about, $) {

    about.init = function () {
        if (sessionStorage) {
            if (sessionStorage.helloWorld) {
                var msg = sessionStorage.helloWorld;
                alert(msg);
            }
        }

        var $plat = $("#plat");
        var platform = "Unknown";

        if (window.cordova) {
            if (device.platform === "iOS") {
                platform = "Apple iOS";
            }
            if (device.platform === "Android") {
                platform = "Android";
            }
        }

        $plat.text(platform);

    };

//    $(document).ready(function () {
//        about.init();
//    });

})(window.about = window.about || {}, $);

/*----------------------------------------------------------
var about = about || {};

about.plat = function () {
    init = function () {
        if (sessionStorage) {
            if (sessionStorage.helloWorld) {
                var msg = sessionStorage.helloWorld;
                alert(msg);
            }
        }

        var $plat = $("#plat");
        var platform = "Unknown";

        if (window.cordova) {
            alert('cordova');
            if (device.platform === "iOS") {
                platform = "Apple iOS";
            }
            if (device.platform === "Android") {
                platform = "Android";
            }
        }
        $plat.text(platform);
    };

    return {
        init: init
    };

} ();

$(document).ready(function () {
    about.plat.init();
});

--------------------------------------------------------*/