/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {
    //probably you want to use jQuery to create element, but Backbone can do it either HAAA
    //#11 make - helpful function for creating DOM elements, arguments - tagName attributes content
    // <h3 class="not-very-important">Preliminary Version</h3>
    //    var el = new Backbone.View().make(
    //        'h3',
    //        { class: 'not-very-important' },
    //        'Preliminary Version'
    //    );

    //    console.log(el);

    //#12 remove
    //    v.remove();


    //#13 Views' events - IMPOETANT: Backbone View should be self contained
    //Equivalent to this.$('.clickable').click(handleClick)
    var FormView = Backbone.View.extend({
        events: {
            'click .clickable': 'handleClick',
            'change': function () {
                console.log('handle changes');
            }
        },
        render: function () {
            this.$el.html('<input class="clickable" type="text" placeholder="clickable" /><input type="text" />');
            return this;
        },
        handleClick: function () {
            console.log('handleClick');
        }
    });

    var fv = new FormView();
    $('body').append(fv.render().el);

})();