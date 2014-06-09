/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {

    //View can handle events from Model and DOM. 
    //View depend on DOM, and DOM events that View can handle
    //All Views have an associate DOM element at all times (.el) which either passed to the constructure or created by the View

    //#1 Views that Create New Elemnet - the new element is defined by id, tagName, className and attributes
    var V = Backbone.View.extend({
        tagName: 'li',
        id: 'thing',
        className: 'active',
        attributes: {
            'data-value': 12345
        }
    });

    var v = new V();
    $('body').prepend(v.el);


    //#2 Views that Attach to Existing Elements, pass a 'el' property to the view's constructor
    var V2 = Backbone.View.extend({});
    var v2 = new V2({ el: '#test' });
    v2.$el.css('background-color', 'CornflowerBlue');

    //#3 Instantiating Views, 
    //#3-1 simplest way to create an instance of Backbone.View
    var view = new Backbone.View();

    //#3-2 Usually to instantiate instance of our own view type
    var VehicleListView = Backbone.View.extend({});
    var myView3 = new VehicleListView();

    //#4 often pass a model to the view, the model contains the data that render to the view
    var myView4 = new VehicleListView({
        model: myModelObject
    });

    //#5  any of these properties will be attached directly to the view object if passed to the contructor
    //model, collection, el, id, className, tagName, attributes
    var theView = new VehicleListView({
        model: myModelObject,
        className: 'model-object'
        //......
    });

    //ex:
    var myModel = new Backbone.Model();
    myModel.set('content', 'this is some content');

    var myView = new Backbone.View({
        model: myModel,
        className: 'model-object'
    });

    $('body').prepend(myView.el);

})();