/// <reference path="libs/jquery-1.8.3-vsdoc.js" />
/// <reference path="jquery-1.8.3.min.js" />

//self invoke, create singleton which only know how to make ajax call, return promise
//not know how to deal with returned data, let the caller to deal with it.
var dataService = function () {
    var urlBase = "http://localhost:38129/api/customers",

        authenticate = function (authToken) {
            return $.ajax({
                url: "/api/authentication",
                type: "POST",
                beforeSend: function (request) {
                    request.setReuestHeader("AuthToken", authToken); //set a custom head AuthToken
                }
            });
        },

        getCustomers = function () {
            return $.getJSON(urlBase);
        },

        getCustomer = function (id) {
            return $.getJSON(urlBase + '/id');
        },

        getCustomerAndOrders = function (id) {
            return $.when(getCustomer(id), getOrders(id));
        },

        getCustomerAndOrders2 = function (id) { //because $.when really return an array object, so we can do like this
            var promises = [getCustomer(id), getOrders(id)];
            //return $.when(promises); not gonna okay
            //return $.when.call( //everytime you want pass context of different paramenters you can use call, then pass the context para with comma

            //here we only have array, everytime you want pass an array, use apply, context under jQuery $
            return $.when.apply($, promises);
        },

        updateCustomer = function (cust) {
            return $.ajax({
                url: urlBase + '/' + cust.ID,
                data: cust,
                type: 'PUT'
            });
        },

        insertCustomer = function (cust) {
            return $.ajax({
                url: urlBase + '/' + cust.ID,
                type: 'POST'
            });
        },

        deleteCustomer = function (id) {
            return $.ajax({
                url: urlBase + '/' + id,
                type: 'DELETE'
            });
        },

        getOrders = function (id) {
            return $.getJSON(urlBase + '/' + id + '/orders');
        },

        getCustomerJSONP = function (id) {
            return $.getJSON(urlBase + '/' + id + '/orders');
        },

        updateStatus = function (msg) {
            return msg;
        };

        //return public api
        return {
        authenticate: authenticate,
        getCustomers: getCustomers,
        getCustomer: getCustomer,
        updateCustomer: updateCustomer,
        getCustomerJSONP: getCustomerJSONP,
        insertCustomer: insertCustomer,
        deleteCustomer: deleteCustomer,
        getOrders: getOrders,
        getCustomerAndOrders: getCustomerAndOrders,
        getCustomerAndOrders2: getCustomerAndOrders2,
        updateStatus: updateStatus
    };

} ();



