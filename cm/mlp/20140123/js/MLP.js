
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var MLP = {


    // ---------- INITIALIZE ---------- //
    Init: function () {
        
        // ----- FUNCTIONS -----//
        MLP.handleEvents();
        MLP.buildHeroCarousel();
        MLP.getTumblr();
    },

    openCenteredWindow: function (url) {
        var myWindow;
        var width = 400;
        var height = 400;
        var left = parseInt((screen.availWidth / 2) - (width / 2));
        var top = parseInt((screen.availHeight / 2) - (height / 2));
        var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
        myWindow = window.open(url, "subWind", windowFeatures);
    },

    handleEvents: function () {
        jQuery('.promoLink').click(function (e) {
            e.preventDefault();
            MLP.openCenteredWindow(jQuery(this).attr('href'));
        });
    },

    // ---------- HERO CAROUSEL ---------- //
    buildHeroCarousel: function () {

        // hero carousel stuff
        jQuery('#hero-carousel').after('<ul id="hero-nav">').cycle({
            timeout: 5000,
            pager: '#hero-nav',
            // callback fn that creates a thumbnail to use as pager anchor 
            pagerAnchorBuilder: function (idx, slide) {
                return '<li style="background-image: url(' + jQuery("#hero-carousel").find("li:eq(" + idx + ")").attr("title") + ')"></li>';
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
            url: "http://api.tumblr.com/v2/blog/cultureclub.clubmonaco.com/posts?notes_info=true&type=photo&api_key=4yDqeXjyYkmfNoh4gUZrS3hl3DQ0JWFDX9boHV6Dbkig27i7Nt&limit=8&tag=men",
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
    }
};


/* ******************** ------------------------- DOM READY ------------------------- ******************** */
; jQuery(function () {

    MLP.Init();

});