/// <reference path="libs/jquery-1.8.3-vsdoc.js" />
/// <reference path="jquery-1.8.3.min.js" />
/// <reference path="dataService.js" />

var customersPage = function () {
    var init = function () {
        $("#GetCustomers").click(function () {
            getCustomers();
        });

        $("#UpdateCustomer").click(function () {
            updateCustomer();
        });

        $("#InsertCustomer").click(function () {
            insertCustomer();
        });

        $("#DeleteCustomer").click(function () {
            deleteCustomer();
        });

        $("#GetCustomerOrders").click(function () {
            getCustomerOrders(1);
        });

        $("#GetCustomerJSONP").click(function () {
            getCustomerJSONP(1);
        });
    },

        getCustomers = function () {
            dataService.getCustomers()  //get back promise          
                .done(function (custs) {
                    var custsHtml = "";
                    for (var i = 0; i < custs.length; i++) {
                        custsHtml += "<li>" + custs[i].FirstName + " " + custs[i].LastName;
                    }
                    $("CustomersContainer").html(custsHtml);
                })
                .fail(function () {
                    alert("Unable to get customers");
                });
        },

        updateCustomer = function () {
            //Simulate customer data
            var cust = {
                ID: 2,
                FistName: "Xiaohong",
                LastName: "Liu"
            };
            dataService.updateCustomer()
            .done(function () {
                updateStatus("Updated Customers! Refresh customer list.");
                getCustomers();
            })
            .fail(function (jqXHR, textStatus, err) {
                alert(textStatus);
            });
        },

        insertCustomer = function () {
            //Fake customer data
            var cust = {
                ID: 3,
                FistName: "Edwin",
                LastName: "Johnson"
            };
            dataService.insertCustomer(cust)
            .done(function () {
                updateStatus("Inserted Customers! Refresh customer list.");
                getCustomers();
            })
            .fail(function (jqXHR, textStatus, err) {
                alert(textStatus);
            });
        },

        deleteCustomer = function (id) {
            dataService.deleteCustomer(id);
        },

        getCustomerOrders = function (id) {
            dataService.getOrders(id);
        },

        getCustomerJSONP = function (id) {
            dataService.getCustomerJSONP(id);
        },

        updateStatus = function (msg) {
            return msg;
        };

    return {
        init: init
    };
} ();

