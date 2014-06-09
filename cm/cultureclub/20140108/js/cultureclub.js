!function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
} (document, "script", "twitter-wjs");

var cc_Blog = {
    init: function () {
        this.getTumblr();
        if ($.browser.msie && (document.documentMode < 9)) {                    
        } else {            
            this.loaded();
        }
    },

    loaded: function () {
        myScroll = new iScroll('cc_gallery', {
            bounce: false,
            scrollbarClass: 'myScrollbar',
            draggableScrollbars: true
        });
    },

    getTumblr: function () {
        jQuery.ajax({
            url: "http://api.tumblr.com/v2/blog/cultureclub.clubmonaco.com/posts?notes_info=true&type=photo&api_key=4yDqeXjyYkmfNoh4gUZrS3hl3DQ0JWFDX9boHV6Dbkig27i7Nt&limit=4&tag=",
            cache: true,
            dataType: 'jsonp',
            success: function (data) {
                $posturl = jQuery(".blog-url");
                $posturl.each(function (index, value) {
                    jQuery(this).attr('href', data.response.posts[index].short_url).find('.blog-image').attr('src', data.response.posts[index].photos[0].alt_sizes[2].url);
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    }
};

;jQuery(function () {   
    cc_Blog.init();
});
