/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {

    //View can handle events from Model and DOM. 
    //View depend on DOM, and DOM events that View can handle
    //All Views have an associate DOM element at all times (.el) which either passed to the constructure or created by the View

    //#5  any of these properties will be attached directly to the view object if passed to the contructor
    //model, collection, el, id, className, tagName, attributes
    //ex: create <div class="model-object"></div>
    var myModel = new Backbone.Model();
    myModel.set('content', 'this is some content');

    var myView = new Backbone.View({
        model: myModel,
        className: 'model-object'
    });

    $('body').prepend(myView.el);


    //#6 el refer to the view's DOM elememt, each view <=map=> a DOM element, may or may not has been added to the document
    var v = new Backbone.View({ el: 'body' }); // so the el property of the view, el refer to document's body
    v.el // <body></body>

    //ex: comment you body tags in html, this can create for you!
    var v = new Backbone.View({ el: 'body' });
    console.log(v.el);


    //#7 $el - jQuery wraper, avoid repeated $(this.el)
    var v = new Backbone.View({ el: 'body' });
    v.$el // [<body></body]
    console.log(v.$el);

    //#8 this.$ - is the jQuery function scoped to the current view, 
    this.$('selector') <==is equivalent to==> this.$el.find('selector') //MEAN your selector don't have to unique for the page, just for that view

    //#9 render is the function that render's the views element (.el)

   


})();