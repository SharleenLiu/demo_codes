/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {

    //#1
    var Vehicle = Backbone.Model.extend({
        prop1: '1'
    });

    var v = new Vehicle();
    var v2 = new Vehicle();

    v.prop1 = 'one';
    console.log(v.prop1);
    console.log(v2.prop1);

    //#2 no need to instantiate
    var Vehicle2 = Backbone.Model.extend({},
       {
           summary: function () {
               return 'Vehicles are for travelling';
           }
       }
    );
    console.log(Vehicle2.summary());

    //#3
    var model = new Backbone.Model();

    var customModel = Backbone.Model.extend({});
    var ford = new customModel();


    //#4
    var model = new Backbone.Model({
        name: 'Peter',
        age: 52
    });


    //#5
    var InitModel = Backbone.Model.extend({
        initialize: function () {
            console.log('it created');
        }
    });
    var car = new InitModel();


})();