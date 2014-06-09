
var scrollPoints = [0, 765, 1515, 2260, 3045];

/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var FeatureScript = {

    //CategoryID: 0,


    // ---------- INITIALIZE ---------- //
    Init: function () {

       
        // quick shop
        //jQuery("[title]").quickshop();

        // functions
        //FeatureScript.buildSlider();
        FeatureScript.scrollSlide();
    },

    scrollSlide: function () {

        var sp = 0;
        var speed = 750;

        jQuery('.feature-slider .arrow').click(function (e) {
            e.preventDefault();
            if (jQuery('.feature-slider .slide1').is(':animated')) {
                return;
            }
            if (jQuery(this).is('.next')) {
                sp++;
                jQuery('.feature-slider .slide1').animate({
                    left: '-' + scrollPoints[sp] + 'px'
                }, speed, 'easeInOutSine');
            } else {
                sp--;
                jQuery('.feature-slider .slide1').animate({
                    left: '-' + scrollPoints[sp] + 'px'
                }, speed, 'easeInOutSine');
            }
            if (sp >= scrollPoints.length - 1) {
                jQuery('.feature-slider .next').addClass('disabled');
                return;
            } else if (sp == 0) {
                jQuery('.feature-slider .prev').addClass('disabled');
                return;
            } else {
                jQuery('.feature-slider .arrow').removeClass('disabled');
            }

        });

        jQuery('.feature-slider .seemore').click(function (e) {
            e.preventDefault();
            sp = 0;
            jQuery('.feature-slider .next').trigger('click');
        });

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