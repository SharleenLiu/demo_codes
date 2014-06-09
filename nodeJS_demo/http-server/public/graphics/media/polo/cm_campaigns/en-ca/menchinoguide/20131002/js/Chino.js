
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var ChinoGuide = {

    //CategoryID: 0,


    // ---------- INITIALIZE ---------- //
    Init: function () {        

        // quick shop
        //jQuery("[title]").quickshop();

        // functions
        ChinoGuide.buildSlider();

    },


    // ---------- SLIDER (CYCLE) ---------- //
    buildSlider: function () {

        // set cycle
        jQuery('#cycle-chino').cycle({
            fx: 'fade',
            delay: -2000,
            speed: 500,
            timeout: 0,
            pager: '#pager-chino',
            next: '#next-item',
            prev: '#prev-item',
            nowrap: true,            
            before: function (curr, next, opts) {
                jQuery(this).removeClass('activeSlide');
            },
            after: function (curr, next, opts) {
                jQuery(this).addClass('activeSlide');
                if (opts.currSlide == 0) {
                    jQuery('#prev-item').addClass('disabled');
                    jQuery('.feature-slider .arrow').css('top', '50%');
                } else {
                    jQuery('#prev-item').removeClass('disabled');
                    jQuery('.feature-slider .arrow').css('top', '50%');
                }
                if (opts.nextSlide == 0) { jQuery('#next-item').addClass('disabled'); } else { jQuery('#next-item').removeClass('disabled'); }
            }
        });
       
        // jump to slide
        jQuery('.cycleNextSlide').css('cursor', 'pointer');
        jQuery('.cycleNextSlide').click(function () {
            jQuery('#cycle-chino').cycle(1);
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
            jQuery('#cycle-chino').cycle(1);
        });
        jQuery('.deeplink-davis').click(function () {
            jQuery('#cycle-chino').cycle(2);
        });
    }


};


/* ******************** ------------------------- DOM READY ------------------------- ******************** */
jQuery(function () {
    
    ChinoGuide.Init();

}); 