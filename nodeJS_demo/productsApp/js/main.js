/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="jquery-1.9.1-vsdoc.js" />
/// <reference path="cordova.js" />

//main.js
(function (main, $) {
    var url;
    if (window.cordova) {
        url = "http://howtowat.ch/api/1/find/recent";
        alert('hi cordova');
    } else {
        url = "recent.txt";
        alert('hi browser');
    }

    if (sessionStorage) {
        sessionStorage.helloWorld = "How are you?";
    }

    main.vm = {
        items: [],
        msg: "",
        getRecent: function () {
            main.vm.msg("loading");
            //index.vm.items.removeAll();
            $.ajax({
                url: url,
                dataType: 'json',
                success: function (data) {
                    $.each(data.someResults, function (i, item) {
                        main.vm.items.push(item);
                    });
                    main.vm.msg("Found " + main.vm.items.length + " results.");
                },
                error: function (xhr, type) {
                    main.vm.msg("Failed to load data");
                }
            });
        }
    };

    main.init = function () {
        //Add notification for click on item
        $("#body").on("click", ".recent-item", function (e) {
            if (window.cordova) {
                // PhoneGap API
                navigator.notification.alert("you picked me in device.");
            } else {
                alert("you picked me.");
            }
        });

        //ko.applyBindings(main.vm, $("#index-page")[0]);
        main.vm.getRecent();
    };

})(window.main = window.main || {}, $);