
/* ******************** ------------------------- PAGE OBJECT ------------------------- ******************** */
var CashmereMen = {

    //CategoryID: 0,

    // ---------- INITIALIZE ---------- //
    Init: function () {

        // custom grid dump
        //        var hiddenLocale = Engine.Locale;
        //        if (hiddenLocale == "en-us") { CashmereMen.CategoryID = 13355568; }
        //        else { CashmereMen.CategoryID = 13357475; }

        //        if (Engine.Environment != EnvironmentSettings.Environments.Local) {
        //            ess.getFamilyGridCategoryCustom(CashmereMen.CategoryID, 12, "FamilyGridCustom", "cashmereGrid"); //DIV ID that houses the dumped grid
        //        }

        // quick shop
        //jQuery("[data-productid]").quickshop({ data: FeatureProducts });

        // functions
        CashmereMen.buildSlider();

    },


    // ---------- SLIDER (CYCLE) ---------- //
    buildSlider: function () {

        // set cycle
        jQuery('#cycle-cashmere').cycle({
            fx: 'fade',
            delay: -2000,
            speed: 500,
            timeout: 0,
            pager: '#pager-cashmere',
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
            jQuery('#cycle-cashmere').cycle(1);
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
    
    CashmereMen.Init();

}); 