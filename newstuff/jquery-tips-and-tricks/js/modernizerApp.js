///<reference path="jquery-1.7.1-vsdoc.js" />
///<reference path="modernizr.custom-2.6.2.js" />
var HTML5App = HTML5App || {};

HTML5App.initialize = function () {
    init = function () {
        if (Modernizr.canvas && Modernizr.video) {
            $.getScript("Scripts/mark.embling.circles.js");

            $("#toggleVideo").change(function () {
                $("#te2008video").toggle();
            });
            $("#toggleCanvas").change(function () {
                $("#te2008canvas").toggle();
            });
            $("#toggleCaption").change(function () {
                $("#te2008caption").toggle();
            });
        } else {
            $("#toggles").hide();
            $("#caption").hide();
            $("#sitenav").css("width", "760px");
            $("#sitefooter").css("clear", "both");
        }
    };

    return {
        init: init
    };

} ();



