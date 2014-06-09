/// <reference path="../../common/leftnav.js" />

(function (cc_maker, $) {

    var init = function init() {
        //$("#cc-mam-sidebar").load("/graphics/media/polo/cm_campaigns/en-us/makeandmuse/20140108/common/leftnav.html");
        //var leftnav = '<div class="mam-thumbs"><a class="navitem" id="item-champ" href="/category/index.jsp?categoryId=24767076&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Reigning Champs</span> </a><a class="navitem" id="item-patmos" href="/family/index.jsp?categoryId=16843156&amp;ab=int_030613_CCLP_MARCIAPATMOS&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Marcia Patmos</span> </a><a class="navitem" id="item-mayle" href="/family/index.jsp?categoryId=15766906&amp;ab=int_030613_CCLP_JANEMAYLE&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Jane Mayle</span> </a><a class="navitem" id="item-morais" href="/family/index.jsp?categoryId=28962886&amp;size=99&amp;cp=12243591.12280936.28962886&amp;ab=ln_men_shoesaccessories_jewelry&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Luis Morais</span> </a><a class="navitem" id="item-scosha" href="/category/index.jsp?categoryId=24061516&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Scosha Woolridge</span> </a><a class="navitem" id="item-campbell" href="/category/index.jsp?categoryId=24061526&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Michelle Campbell</span> </a><a class="navitem" id="item-mcnairy" href="/category/index.jsp?categoryId=23581636&amp;ab=int_nav_CCLP_MCNAIRY_GETTOKNOWHIM&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Mark McNairy</span> </a><a class="navitem" id="item-rodriguez" href="/family/index.jsp?categoryId=21028366&amp;ab=int_050113_CCLP_RODRIGUEZ_GETTOKNOWHIM&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Jason Rodriguez</span></a><a class="navitem" id="item-selima" href="/category/index.jsp?categoryId=20395366&amp;ab=int_050113_CCLP_SCOSHA&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Selima Salaun</span> </a><a class="navitem" id="item-alexander" href="/category/index.jsp?categoryId=20022216&amp;ab=int_030613_CCLP_ERNESTALEXANDER&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Ernest Alexander</span></a><a class="navitem" id="item-scribe" href="/family/index.jsp?categoryId=17527196&amp;ab=int_030613_CCLP_ANDREWMARIANI&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Andrew Mariani</span> </a><a class="navitem" id="item-coveteur" href="/family/index.jsp?categoryId=17527226&amp;ab=int_030613_CCLP_COVETEUR&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Erin Kleinberg & Stephanie Mark</span></a><a class="navitem" id="item-rancourt" href="/category/index.jsp?categoryId=16843186&amp;ab=int_030613_CCLP_NOWFEATURING&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Kyle rancourt</span> </a><a class="navitem" id="item-pierce" href="/family/index.jsp?categoryId=15766926&amp;ab=int_030613_CCLP_MATTPIERCE&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Matt Pierce</span></a><a class="navitem" id="item-harrington" href="/family/index.jsp?categoryId=13355568&amp;ab=int_030613_CCLP_TEDHARRINGTON&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Ted Harrington</span> </a><a class="navitem" id="item-erickson" href="/family/index.jsp?categoryId=13357543&amp;ab=int_030613_CCLP_KARENERICKSON&amp;cms_pd=20150101%2B1200"><span class="thumb"></span><span class="text">Karen Erickson</span></a></div>';
        //jQuery('#cc-mam-sidebar').append(leftnav);
        cc_mmNav();
        cc_buildSlider();
        cc_getFamilyGridCategory();
    },

    cc_CategoryID = 30686276,
    baseURLcategory = "/svc/CatalogServices/CategoryData?format=json&appId=cmus&stoken=5VgENPlDu6ts+n8Rmoj3kA==&storeCode=CMUS&locale=en_US",
    baseURLproducts = "/svc/CatalogServices/ProductData?format=json&appId=cmus&stoken=5VgENPlDu6ts+n8Rmoj3kA==&storeCode=CMUS&locale=en_US",

    cc_getProductImage = function (prd) {
        for (var a = 0; a < prd.images.image.length; a++) {
            if (prd.images.image[a].type == "T167") {
                return prd.images.image[a].url
            }
        }
    },

    cc_processCategory = function (cdata) {
        var h = cdata.categoryDetailServiceInfo.categories.category[0];
        var g = (h.categoryProducts.product.length < 4) ? 4 : h.categoryProducts.product.length;

        var $refinement = jQuery(".refinement");
        $refinement.find('h5').text(h.title).end().find('a').attr('src', '/category/index.jsp?categoryId=' + h.categoryId);

        var html = [];
        var li = '<li class="product"><div class="product-photo"><a class="photourl" href=""><img src="" width="167" height="167" alt="" /></a></div><div class="product-details"><div class="product-details-a"><a href=""></a></div><div class="product-price"><a href=""><span>$</span></a></div></div></li>';

        for (var i = 0; i < g; i++) {
            html.push(li);
        }

        jQuery('#cc-products').append(html.join(''));

    },

    cc_getUrlFromCategory = function (cdata) {
        var c = [];
        var h = cdata.categoryDetailServiceInfo.categories.category[0];
        var g = (h.categoryProducts.product.length < 4) ? 4 : h.categoryProducts.product.length;
        for (var f = 0; f < g; f++) {
            c.push(h.categoryProducts.product[f].productId)
        }
        var k = baseURLproducts;
        for (var e = 0; e < c.length; e++) {
            k += "&productId=" + c[e]
        }

        return k;
    },

    cc_processProducts = function (pdata) {
        $product = jQuery(".product");
        $product.each(function (index, value) {
            var suburl = pdata.products.product[index].productBaseURL + 'productId=' + pdata.products.product[index].productId;
            jQuery(this).find('.photourl').attr('href', suburl).find('img').attr('src', cc_getProductImage(pdata.products.product[index]));
            jQuery(this).find('.product-details-a a').attr('href', suburl).text(pdata.products.product[index].productTitle);
            jQuery(this).find('.product-price a').attr('href', suburl).find('span').text('$' + pdata.products.product[index].productPrice.current);
        });
    },

    cc_getCategory = function (options) {
        if (typeof options !== 'object') {
            options = {};
        }
        options.url = options.url || '';

        return jQuery.get(options.url, cc_processCategory, 'json');
    },

    cc_getProducts = function (options) {
        if (typeof options !== 'object') {
            options = {};
        }
        options.url = options.url || '';

        return jQuery.get(options.url, cc_processProducts, 'json');
    },

    cc_getFamilyGridCategory = function () {
        //localhost test
                if (window.location.href.toLowerCase().indexOf("localhost") != -1) {

                    jQuery.when(
                        cc_getCategory({ url: 'cm-onecategory.json' })
                    )
                    .done(function (cdata) {
                        cc_getProducts({ url: 'multipleproducts.json' })
                    })
                    .fail(function () {

                    });

                } else { //preview and production

        var urlc = baseURLcategory + "&catId=" + cc_CategoryID;

        jQuery.when(
                cc_getCategory({ url: urlc })
            )
            .done(function (cdata) {
                cc_getProducts({ url: cc_getUrlFromCategory(cdata) })
                console.log(cdata);
            })
            .fail(function () {
                console.log('failed!!!');
            });
        }
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
    }

    //start up
    jQuery(document).ready(init);

})(window.cc_maker = window.cc_maker || {}, $);

  