/// <reference path="jquery-1.8.3.min.js" />

(function ($) {
    var $pro_golflp_53014_2 = $('#pro_golflp_53014_2'),
        $pro_golflp_53014_3 = $('#pro_golflp_53014_3'),
        $pro_golflp_53014_4 = $('#pro_golflp_53014_4'),
        $pro_golflp_53014_5 = $('#pro_golflp_53014_5'),
        $pro_golflp_53014_6_1 = $('#pro_golflp_53014_6_1');
        $pro_golflp_53014_6_2 = $('#pro_golflp_53014_6_2');
        $pro_golflp_53014_6_3 = $('#pro_golflp_53014_6_3');
        $pro_golflp_53014_61 = $('#pro_golflp_53014_61'),
        $pro_golflp_53014_62 = $('#pro_golflp_53014_62'),
        $pro_golflp_53014_63 = $('#pro_golflp_53014_63'),
        $pro_golflp_53014_7 = $('#pro_golflp_53014_7'),
        $pro_golflp_53014_8 = $('#pro_golflp_53014_8'),
        $pro_golflp_53014_9 = $('#pro_golflp_53014_9'),
        $golflp_53014 = $('#golflp_53014'),
        $pro_golflp_53014 = $('#pro_golflp_53014'),       

    init = function init() {        

        golf_FinalProcess(1);
        
        $('img.golf_playeroffon').hover(function () {
            var idon = $(this).attr('id');
            $(this).attr('src', 'images/players/' + idon + '_on.png');
        }, function () {
            var idoff = $(this).attr('id');
            $(this).attr('src', 'images/players/' + idoff + '_off.png');
        });

        $('img.golf_playeroffon').click(function () {            
            var theid = $(this).attr('id');
            $golflp_53014.css('display', 'none');
            $pro_golflp_53014.show();
            golf_FinalProcess(theid);          
            $(window).scrollTop(0);
        });

        $('.golf_videoswitch').click(function () {
            var videosw = $(this).attr('id').replace('pro_golflp_53014_6_', '');
            var video_div_id = '#pro_golflp_53014_6' + videosw;
            hide_videos();
            $(video_div_id).show();
        });

        $('#pro_golflp_53014_61').generateVideo({
            //id: "yourIDHere",
            type: "jwplayer",
            filename: "videos/AD19715_Su14_Polo_Golf_Banner_Ad_10s_640x480_V.04.mp4",
            visibleOnLoad: true,
            autostart: true,
            autopause: false,
            autoclose: false,
            //playTarget: "#yourTargetPlayElement",
            closeButton: false,
            tracking: true,
            //trackProjectName: "YourProjectName",
            modal: false,
            showLogs: false,
            onVideoPause: function (position, duration) {
                //console.log('You paused me');
                //console.log('Video Position: ' + position + '');
                //console.log('Video Duration: ' + duration + '');
            }
        });


    },

    hide_videos = function () {
        $pro_golflp_53014_61.hide();
        $pro_golflp_53014_62.hide();
        $pro_golflp_53014_63.hide();
    },

    slider = function (slides) {
        $('.royalSlider').royalSlider('destroy').empty().royalSlider({
            slides: slides,
            controlNavigation: 'bullets'
        });
    },
    
    golf_processData = function (gdata) {
        $pro_golflp_53014_2.css('background-image', 'url("' + gdata.player.image4 + '")');
        $pro_golflp_53014_3.html(gdata.player.description);
        $pro_golflp_53014_4.css('background-image', 'url("' + gdata.player.image5 + '")');       
        $imgs = '<img class="rsImg" src="' + gdata.player.image6 + '" /><img class="rsImg" src="' + gdata.player.image7 + '" /><img class="rsImg" src="' + gdata.player.image8 + '" />'                    
        $pro_golflp_53014_5.empty().addClass("royalSlider rsDefault");
        slider($imgs);
        $pro_golflp_53014_6_1.css('background-image', 'url("' + gdata.player.image12 + '")');
        $pro_golflp_53014_6_2.css('background-image', 'url("' + gdata.player.image13 + '")');
        $pro_golflp_53014_6_3.css('background-image', 'url("' + gdata.player.image14 + '")');
        $pro_golflp_53014_61.css('background-image', 'url("' + gdata.player.image9 + '")');
        $pro_golflp_53014_62.css('background-image', 'url("' + gdata.player.image10 + '")');
        $pro_golflp_53014_63.css('background-image', 'url("' + gdata.player.image11 + '")');
        $pro_golflp_53014_7.css('background-image', 'url("' + gdata.player.image15 + '")');
        $pro_golflp_53014_8.html(gdata.player.interview);
        $pro_golflp_53014_9.css('background-image', 'url("' + gdata.player.image16 + '")');
    },

    golf_getData = function (options) {
        if (typeof options !== 'object') {
            options = {};
        }
        options.url = options.url || '';     
      
        return $.getJSON(options.url);
    },

    golf_FinalProcess = function (id) {
        $.when(
            golf_getData({ url: 'data/' + id + '.json' })
        )
        .done(function (gdata) {
            golf_processData(gdata);
        })
        .fail(function () {
            console.log('fail');
        });
    };

    $(document).ready(init);

})(jQuery);