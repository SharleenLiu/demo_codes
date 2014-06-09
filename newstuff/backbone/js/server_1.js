/// <reference path="libs/jquery-1.8.3.min.js" />
/// <reference path="libs/underscore.js" />
/// <reference path="libs/backbone.js" />

(function () {

    //Same origin policy - Backbone use CORS
    //Cross-origin resource sharing (CORS), uses special http headers to specify the set of valid origins, CORS support all http verbs, supported by most modern browsers(http://caniuse.com/cors), not supported by IE<10
    //alternative to jsonp, jsonp support only GET.
    //Backbone uses RESTful web requests to synchronize data to and from a server
    //Origin is application layer protocol + domain + name + port number 
    //ex(same origin): http://localhost:3000, http://localhost:3000/a, http://localhost:3000/b, 
    //ex(not same origin): http://localhost:3001/a, http://localhost:3000/a
    //https://github.com/liammclennan/backbone-server


    var Book = Backbone.Model.extend({
        url: 'http://withouttheloop.com:3002/books'
    });

    var midnight = new Book({
        title: 'Midnight in the garden of good and evil',
        author: 'John Berendt'
    });

    midnight.save({}, {
        success: function () { alert('done'); },
        error: function () { alert('error'); }
    });


    //---- Collection request example, .create - POST, post to server
    //same as $ curl –vX POST http://localhost:8080/people -H “Content-Type: application/json” –d ‘{“name”:”Bob”,”age”:34}’
    var Person = Backbone.Model.extend({}),
    People = Backbone.Collection.extend({
        model: Person,
        url: 'http://localhost:8080/people'
    });

    var people = new People();
    people.create({ name: 'Bob', age: 34 });


    //---- Collection request example, .fetch - GET, fetch the collection from server, [{ }, { }, { }]
    //same as $ curl http://localhost:8080/people
    var Person = Backbone.Model.extend({}),
    People = Backbone.Collection.extend({
        model: Person,
        url: 'http://localhost:8080/people'
    });

    var people = new People();
    people.fetch();



    //----Model request example, .fetch - GET, requied Model has id defined.
    var Person = Backbone.Model.extend({}); // or define url here

    var person = new Person({ id: 0 });
    people.add(person); //or once the person in people collection, the person able to derive the url from people

    person.fetch();
    //or
    person.fetch({
        success: function () {
            console.log(JSON.stringify(person));
        }
    });


    //----Model request example, .save - create or update depend on .isNew(), model create is same as collection.create()


})();