/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {

    //View can handle events from Model and DOM. 
    //View depend on DOM, and DOM events that View can handle
    //All Views have an associate DOM element at all times (.el) which either passed to the constructure or created by the View


    //#9 render is the function that render's the views element (.el)
    //the default do nothing. Provide an implementation with your view definition when you define your own type
    //    var VV = Backbone.View.extend({
    //        render: function () {
    //            this.$el.html('some content from render');
    //            return this; // by convention, this made easy chaining
    //        }
    //    });

    //#10 Combining Views and Models HAHAH SPAGHETTI!!!
    //pass the model to view's constructor
    //    var vv = new View({
    //        model: myModel
    //    });

    //for Model which Bind the view's render method
    //    myModel.on('change', function () {
    //        $('body').append(vv.render().el);
    //    });


    //ex, view auto update/refresh when model changes
    var RefreshingView = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', function () {
                this.render();
            }, this); //also need to pass view object(this here) as an argument to the 'on' method for the event call context
        },
        render: function () {
            this.$el.html(this.model.get('text'));
            return this;
        }
    });

    var m = Backbone.Model({ text: new Date().toString() });
    var v = new RefreshingView({ model: m, el: 'body' });
    v.render();

    setInterval(function () {
        m.set({ text: new Date().toString() });

    }, 1000);


})();