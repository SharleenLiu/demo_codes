
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var MenPrintStory = {

    //CategoryID: 0,

    // ---------- INITIALIZE ---------- //
    Init: function () {

        // quick shop
        //jQuery("[title]").quickshop();

        // functions
        MenPrintStory.buildSlider();

    },


    // ---------- SLIDER (CYCLE) ---------- //
    buildSlider: function () {

        // set cycle
        jQuery('#cycle-print').cycle({
            fx: 'fade',
            delay: -2000,
            speed: 500,
            timeout: 0,
            pager: '#pager-print',
            next: '#next-item',
            prev: '#prev-item',
            nowrap: true,
//            onPrevNextEvent: function (isNext, zeroBasedSlideIndex, slideElement) {
//                var additionalIdentifier = '';
//                if (Engine.Environment == EnvironmentSettings.Environments.Live) {
//                    SiteHelper.Analytics.Track("int_030613_MenPrintStory_" + additionalIdentifier + "_PAGE" + (zeroBasedSlideIndex + 1));
//                }
//            },
            before: function (curr, next, opts) {
                jQuery(this).removeClass('activeSlide');
            },
            after: function (curr, next, opts) {
                jQuery(this).addClass('activeSlide');
                if (opts.currSlide == 0) { jQuery('#prev-item').addClass('disabled'); } else { jQuery('#prev-item').removeClass('disabled'); }
                if (opts.nextSlide == 0) { jQuery('#next-item').addClass('disabled'); } else { jQuery('#next-item').removeClass('disabled'); }
            }
        });

        // track on pager item click
//        jQuery('.pager a').click(function () {
//            var thisPageNumber = jQuery(this).text();
//            if (Engine.Environment == EnvironmentSettings.Environments.Live) {
//                SiteHelper.Analytics.Track("int_030613_MenPrintStory_PAGE" + thisPageNumber);
//            }
//        });

        // jump to slide
        jQuery('.cycleNextSlide').css('cursor', 'pointer');
        jQuery('.cycleNextSlide').click(function () {
            jQuery('#cycle-print').cycle(1);
        });

        // wait for images before showing content
        jQuery('.feature-slider').waitForImages({
            waitForAll: true,
            finished: function () {
                jQuery('.feature-slider').fadeIn();
            }
        });
    }


};


/* ******************** ------------------------- DOM READY ------------------------- ******************** */
jQuery(function () {

    MenPrintStory.Init();

}); 