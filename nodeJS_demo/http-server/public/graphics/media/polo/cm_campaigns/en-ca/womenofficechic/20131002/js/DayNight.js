
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var FeatureScript = {

    //CategoryID: 0,


    // ---------- INITIALIZE ---------- //
    Init: function () {
        
        // quick shop
        //jQuery("[title]").quickshop();

        // functions

        FeatureScript.buildSlider();

        jQuery('#next-item').addClass('disabled');
        if (supportsTransitions()) {
            jQuery('.slide1 .slider-text-wrapper', '#cycle-feature')
                .css({ 'transition': 'left 1.5s ease-in-out', 'transition-delay': '2s', 'left': '-760px' })
                .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                    jQuery('#next-slide').click(function () {
                        jQuery(this).hide();
                        jQuery('#next-item').removeClass('disabled').trigger('click');
                    });
                });
        } else {
            setTimeout(function () {
                jQuery('.slide1 .slider-text-wrapper', '#cycle-feature')
                    .animate({ 'left': '-760px' }, 1500, 'easeInOutSine', function () {
                        jQuery('#next-slide').click(function () {
                            jQuery(this).hide();
                            jQuery('#next-item').removeClass('disabled').trigger('click');
                        });
                    });
            }, 2000);
        }

        function supportsTransitions() {
            var b = document.body || document.documentElement;
            var s = b.style;
            var p = 'transition';
            if (typeof s[p] == 'string') { return true; }

            // Tests for vendor specific prop
            v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (var i = 0; i < v.length; i++) {
                if (typeof s[v[i] + p] == 'string') { return true; }
            }
            return false;
        }
    },


    // ---------- SLIDER (CYCLE) ---------- //
    buildSlider: function () {

        // set cycle
        jQuery('#cycle-feature').cycle({
            fx: 'cover', //'cover',
            delay: -2000,
            speed: 600,
            timeout: 0,
            pager: '#pager-feature',
            next: '#btn-next-item',
            prev: '#btn-prev-item',
            nowrap: true,            
            before: function (curr, next, opts) {
                //opts.direction = (opts.nextSlide < opts.currSlide)? 'right':'left';
                jQuery(this).removeClass('activeSlide');
            },
            after: function (curr, next, opts) {
                jQuery(this).addClass('activeSlide');
                if (opts.currSlide == 0) { jQuery('#prev-item').addClass('disabled'); } else { jQuery('#prev-item').removeClass('disabled'); }
                if (opts.nextSlide == 0) { jQuery('#next-item').addClass('disabled'); } else { jQuery('#next-item').removeClass('disabled'); }
            }
        });

        // cycle - change directions
        jQuery('#prev-item, #next-item').click(function (e) {
            ID = jQuery(this).attr('id');
            var changedOpts = jQuery('#cycle-feature').data('cycle.opts')
            changedOpts.direction = (ID == 'prev-item') ? 'right' : 'left';
            jQuery('#cycle-feature').data('cycle.opts', changedOpts);
            jQuery('#btn-' + ID).trigger('click');
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

    }


};


/* ******************** ------------------------- DOM READY ------------------------- ******************** */
jQuery(function () {
    
    FeatureScript.Init();

}); 