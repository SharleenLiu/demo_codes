/// <reference path="../../common/leftnav.js" />
/// <reference path="../../../../common/20131002/js/jquery-1.7.1.js" />
/// <reference path="../../../../common/20131002/js/jquery-1.7.1-vsdoc.js" />

(function (cc_maker, $) {

    var init = function () {
        cc_mmNav();
        cc_buildSlider();
        cc_getFamilyGridCategory();
    },

    cc_CategoryID = 30686276,
   
    baseURLcategory = "http://qa.shop.ralphlauren.com/Data/cm-us/GetByCatId/" + cc_CategoryID +"/?imgtype=T167&callback=?",

    cc_processCategory = function (cdata) {

        var $refinement = jQuery(".refinement");
        $refinement.find('h5').text(cdata.CategoryTitle).end().find('a').attr('src', '/category/index.jsp?categoryId=' + cdata.CategoryId);

        var g = cdata.CategoryProdCount;

        var html = [];
        var li = '<li class="product"><div class="product-photo"><a class="photourl" href=""><img src="" width="167" height="167" alt="" /></a></div><div class="product-details"><div class="product-details-a"><a href=""></a></div><div class="product-price"><a href=""><span>$</span></a></div></div></li>';

        for (var i = 0; i < g; i++) {
            html.push(li);
        }

        jQuery('#cc-products').append(html.join(''));
        cc_processProducts(cdata.CategoryProducts);
    },

    cc_processProducts = function (pdata) {
        $product = jQuery(".product");
        $product.each(function (index, value) {
            var suburl = pdata[index].productBaseURL + 'productId=' + pdata[index].productId;
            jQuery(this).find('.photourl').attr('href', suburl).find('img').attr('src', (pdata[index].url));
            jQuery(this).find('.product-details-a a').attr('href', suburl).text(pdata[index].productTitle);
            jQuery(this).find('.product-price a').attr('href', suburl).find('span').text('$' + pdata[index].productPrice.current);
        });
    },

//    cc_getCategory = function (options) {
//        if (typeof options !== 'object') {
//            options = {};
//        }
//        options.url = options.url || '';

//        return jQuery.get(options.url, cc_processCategory, 'json');
//    },

    cc_getCategory_jsonp = function (options) {
        if (typeof options !== 'object') {
            options = {};
        }
        options.url = options.url || baseURLcategory;

        jQuery.ajax({
            type: 'GET',
            url: options.url,
            async: false,
            jsonpCallback: 'cb',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function (cdata) {                
                cc_processCategory(cdata);
            },
            error: function (e) {
                //console.log(e.message);
            }
        });
    },

    cc_getFamilyGridCategory = function () {
        var urlc = baseURLcategory;       
        cc_getCategory_jsonp({ url: urlc });
    },

    cc_buildSlider = function () {
    
        jQuery('#cycle-maker').cycle({
            fx: 'fade',
            delay: -2000,
            speed: 500,
            timeout: 0,
            pager: '#pager-maker',
            next: '#next-item',
            prev: '#prev-item',
            nowrap: true,
            before: function (curr, next, opts) {
                jQuery(this).removeClass('activeSlide');
            },
            after: function (curr, next, opts) {
                jQuery(this).addClass('activeSlide');
                if (opts.currSlide == 0) { jQuery('#prev-item').addClass('disabled'); } else { jQuery('#prev-item').removeClass('disabled'); }
                if (opts.nextSlide == 0) { jQuery('#next-item').addClass('disabled'); } else { jQuery('#next-item').removeClass('disabled'); }
            }
        });

        jQuery('.pager a').click(function () {
            var thisPageNumber = jQuery(this).text();
        });

        jQuery('.cycleNextSlide').css('cursor', 'pointer');
        jQuery('.cycleNextSlide').click(function () {
            jQuery('#cycle-maker').cycle(1);
        });

        jQuery('.mam-slider').waitForImages({
            waitForAll: true,
            finished: function () {
                jQuery('.mam-slider').fadeIn();
            }
        });
    },

    cc_mmNav = function () {
        var sidebarUS = jQuery('#cc-mam-sidebar.locale-us');
        var headlineTxt = jQuery('.cc-mam-profile .cc-headline h2').text().toLowerCase();
        var navItem = jQuery('#cc-mam-sidebar .navitem');

        sidebarUS.show();

        navItem.each(function () {
            thisItem = jQuery(this);
            thisTxt = thisItem.find('.text').text().toLowerCase();

            if (headlineTxt.indexOf(thisTxt) !== -1) {
                thisItem.addClass('on');
            }
        });
    };

    //start up
    jQuery(document).ready(init);

})(window.cc_maker = window.cc_maker || {}, $);

