/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {

    var Rectangle = Backbone.Model.extend({});

    //View can handle events from Model and DOM. 
    //View depend on DOM, and DOM events that View can handle
    //All Views have an associate DOM element at all times (.el) which either passed to the constructure or created by the View
    //Views that Create New Elemnet - the new element is defined by id, tagName, className and attributes



    //New View type by extending
    var RectangleView = Backbone.View.extend({
        tagName: 'div',
        className: 'rectangle',

        //backbone event response to View or to DOM
        events: {
            'click': 'move'
        },
        render: function () {
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;
        },
        setDimensions: function () { // access the DOM element bind for this view
            this.$el.css({
                width: this.model.get('width') + 'px',
                height: this.model.get('height') + 'px'
            });
        },
        setPosition: function () {
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y
            });
        },
        setColor: function () {
            this.$el.css('background-color', this.model.get('color'));
        },
        move: function () {
            this.$el.css('left', this.$el.position().left + 10); // read current value then add 10
        }
    });

    //#1 instantiate to use
//    var myRectangle = new Rectangle({
//        width: 100,
//        height: 60,
//        position: {
//            x: 300,
//            y: 150
//        },
//        color: '#ff0000'
//    });

//    var myView = new RectangleView({ model: myRectangle });

//    $('div#canvas').append(myView.render().el);


    //#2 instantiate to use as many as you can
    var models = [
        new Rectangle({
            width: 100,
            height: 60,
            position: {
                x: 300,
                y: 150
            },
            color: '#ff0000'
        }),
        new Rectangle({
            width: 26,
            height: 300,
            position: {
                x: 500,
                y: 75
            },
            color: '#00ff00'
        }),
        new Rectangle({
            width: 300,
            height: 70,
            position: {
                x: 310,
                y: 200
            },
            color: '#0000ff'
        })
    ];

    //use underscore
    _(models).each(function (model) {
        $('div#canvas').append(new RectangleView({model: model}).render().el);
    });


})();