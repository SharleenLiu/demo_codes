
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var WLP = {


    // ---------- INITIALIZE ---------- //
    Init: function () {
        currLocale = jQuery('#hiddenLocale').val();
        var myWindow;
        function openCenteredWindow(url) {
            var width = 400;
            var height = 400;
            var left = parseInt((screen.availWidth / 2) - (width / 2));
            var top = parseInt((screen.availHeight / 2) - (height / 2));
            var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
            myWindow = window.open(url, "subWind", windowFeatures);
        }

        //        jQuery('.promoLink').click(function (e) {
        //            e.preventDefault();
        //            openCenteredWindow(jQuery(this).attr('href'));
        //        });

        //        jQuery(".bloglp-image-container img").click(function () {
        //            Engine.FetchPost(jQuery(this).attr("PostID"));
        //        });


        // ----- FUNCTIONS -----//
        WLP.buildHeroCarousel();
        WLP.getTumblr();
        //WLP.buildModal();

    },


    // ---------- HERO CAROUSEL ---------- //
    buildHeroCarousel: function () {

        // hero carousel stuff
        jQuery('#hero-carousel').after('<ul id="hero-nav">').cycle({
            timeout: 5000,
            pager: '#hero-nav',
            // callback fn that creates a thumbnail to use as pager anchor 
            pagerAnchorBuilder: function (idx, slide) {
                return '<li id="thumb-' + idx + '" style="background-image: url(' + jQuery("#hero-carousel").find("li:eq(" + idx + ")").attr("title") + ')"></li>';
            }
        });

        // hero nav stuff
        jQuery("#hero-nav").find("li").each(function () {
            var index = jQuery(this).index();
            jQuery("#hero-nav").find('li:eq(3)').addClass('last');
            jQuery(this)
                .click(function () {
                    window.location = jQuery("#hero-carousel").find("li:eq(" + index + ")").find("a").attr("href");
                })
                .hover(function () {
                    jQuery("#hero-carousel").cycle(index);
                });
        });

    },


    getTumblr: function () {
        jQuery.ajax({
            url: "http://api.tumblr.com/v2/blog/cultureclub.clubmonaco.com/posts?notes_info=true&type=photo&api_key=4yDqeXjyYkmfNoh4gUZrS3hl3DQ0JWFDX9boHV6Dbkig27i7Nt&limit=8&tag=women",            
            cache: true,
            dataType: 'jsonp',
            success: function (data) {
                $posturl = jQuery(".blog-url");
                $posturl.each(function (index, value) {
                    jQuery(this).attr('href', data.response.posts[index].short_url).find('.blog-image').attr('src', data.response.posts[index].photos[0].alt_sizes[2].url);
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //alert('Error: ' + textStatus + errorThrown);
            }
        });
    },


    // ---------- BUILD MODAL ---------- //
    buildModal: function () {

        var modalHeight = 516;
        var modalWidth = 732;

        // block UI modal for video player
        jQuery('.video-link').click(function () {
            jQuery.blockUI({
                message: jQuery('#video'),
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.6,
                    cursor: 'wait'
                },
                css: {
                    backgroundImage: 'url("' + Engine.Environment + '/Content/images/local/' + currLocale + '/PageImages/WLP/0306/0306_modal_bg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'transparent',
                    padding: 0,
                    margin: 0,
                    height: modalHeight + 'px',
                    width: modalWidth + 'px',
                    top: (jQuery(window).height() - modalHeight) / 2 + 'px',
                    left: (jQuery(window).width() - modalWidth) / 2 + 'px',
                    textAlign: 'center',
                    color: '#000',
                    border: '0',
                    cursor: 'wait'
                }
            });
        });

        // close modal
        jQuery('.modal-close').click(function () {
            jQuery.unblockUI();
        });

        // jw player video
        jwplayer('jwVideo').setup({
            'id': 'promoVideo',
            'width': '640',
            'height': '360',
            'file': 'http://video.ralphlauren.com/CM_SP13/Spring1_mp4.mp4',
            'image': Engine.Environment + '/Content/images/local/' + currLocale + '/PageImages/WLP/0306/0306_modal_video_cover.jpg',
            //'skin': 'js/flashvideo/skins/glow/glow.zip',
            'events': {
                onReady: function (event) {
                    //jwplayer().play();
                },
                onPlay: function (event) {
                    //var currentPosition = jwplayer().getPosition();
                    //if (currentPosition == 0) { SOS_Omniture.trackClick(': Video Initiate'); }
                },
                onPause: function (event) {
                    //var currentPosition = jwplayer().getPosition();
                    //if (currentPosition <= 40) { SOS_Omniture.trackClick(': Video 25% complete'); }
                    //if ((currentPosition > 40) && (currentPosition <= 77)) { SOS_Omniture.trackClick(': Video 50% complete'); }
                    //if ((currentPosition > 77) && (currentPosition <= 110)) { SOS_Omniture.trackClick(': Video 75% complete'); }
                    //if (currentPosition > 110) { SOS_Omniture.trackClick(': Video 100% complete'); }
                },
                onComplete: function (event) {
                    //SOS_Omniture.trackClick(': Video 100% complete');
                }
            },
            'modes': [
				{ type: 'flash', src: Engine.Environment + '/Scripts/Active/flashvideo/player.swf' },
					{
					    type: 'html5',
					    config: {
					        'file': 'http://video.ralphlauren.com/CM_SP13/Spring1_mp4.mp4',
					        'provider': 'video'
					    }
					},
				{
				    type: 'download',
				    config: {
				        'file': 'http://video.ralphlauren.com/CM_SP13/Spring1_mp4.mp4',
				        'provider': 'video'
				    }
				}
			]
        });

        // [[[[[[[[[[ ---------- WINDOW RESIZE EVENT ---------- ]]]]]]]]]] //
        jQuery(window).on('resize', function (e) {
            newHeight = (jQuery(window).height() - modalHeight) / 2 + 'px';
            newWidth = (jQuery(window).width() - modalWidth) / 2 + 'px';
            jQuery('.blockUI.blockMsg.blockPage').css('top', newHeight);
            jQuery('.blockUI.blockMsg.blockPage').css('left', newWidth);
        });

    }

};


/* ******************** ------------------------- DOM READY ------------------------- ******************** */
; jQuery(function () {

    WLP.Init();

});