
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var FeatureScript = {

    //CategoryID: 0,


    // ---------- INITIALIZE ---------- //
    Init: function () {

        // custom grid dump
        //        var hiddenLocale = Engine.Locale;
        //        if (hiddenLocale == "en-us") { feature.CategoryID = 13355568; }
        //        else { feature.CategoryID = 13357475; }

        //        if (Engine.Environment != EnvironmentSettings.Environments.Local) {
        //            ess.getFamilyGridCategoryCustom(feature.CategoryID, 12, "FamilyGridCustom", "featureGrid"); //DIV ID that houses the dumped grid
        //        }

        // quick shop
        //jQuery("[data-productid]").quickshop({ data: FeatureProducts });

        // functions
        FeatureScript.buildSlider();

    },


    // ---------- SLIDER (CYCLE) ---------- //
    buildSlider: function () {

        // set cycle
        jQuery('#cycle-feature').cycle({
            fx: 'fade',
            delay: -2000,
            speed: 500,
            timeout: 0,
            pager: '#pager-feature',
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
       
        // jump to slide
        jQuery('.cycleNextSlide').css('cursor', 'pointer');
        jQuery('.cycleNextSlide').click(function () {
            jQuery('#cycle-feature').cycle(1);
        });

        // wait for images before showing content
        jQuery('.feature-slider').waitForImages({
            waitForAll: true,
            finished: function () {
                jQuery('.feature-slider').fadeIn();
            }
        });

        //jQuery('.cycleNextSlide').css('cursor', 'pointer');
        jQuery('.deeplink-kennedy').click(function () {
            jQuery('#cycle-feature').cycle(1);
        });
        jQuery('.deeplink-davis').click(function () {
            jQuery('#cycle-feature').cycle(2);
        });
    }


};


/* ******************** ------------------------- DOM READY ------------------------- ******************** */
jQuery(function () {

    FeatureScript.Init();

}); 