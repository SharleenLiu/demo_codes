/*IE HTML5 Conpatibility*/

document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("nav");
document.createElement("section");
document.createElement("aside");


var GenericHelper = {
    PriceFormatter: function (price) {
        if (price != "") {
            if (price == parseInt(price)) {
                return price;
            }
            else if (Math.round(price * 10) / 10 == price) {
                return price + "0";
            }
            else {
                return Math.round(price * 100) / 100;
            }
        }
        else {
            return price;
        }
    }
};

/*
Quick Ajax Loader Plugin
Mihai V.
Ralph Lauren 2012
*/
(function ($) {
    $.fn.extend({
        Loader: function () {
            return this.each(function () {
                $(this).html("<div style='padding:30px 0px 30px 0px; text-align:center;width:100%;'><img src='http://mvc.clubmonaco.com/Content/images/ajax-loader-cm.gif' /></div>");
            });
        }
    });

})(jQuery);


/*
    QuickShop Plugin
    Mihai V.
    Ralph Lauren 2012
*/
(function ($) {
    $.fn.extend({
        quickshop: function () {

            //Set the default values, use comma to separate the settings, example:
//            var defaults = {
//                data: [],
//                currencySymbol : "$"
//            }

            //var options = $.extend(defaults, options);
            return this.each(function (currentIndex, val) {
                //var o = options;
                var currentObject = $(this);
               
      
                var currentProductId = currentObject.attr("title");
//                for (var g in o.data) 
//                {
//                    var p = o.data[g];
//                    if (currentProductId == p.productId) {
//                       

//                        currentObject.attr("data-productname", p.productLongTitle);
//                        currentObject.attr("data-productprice", p.productPrice.current);
//                        currentObject.attr("data-productbaseprice", p.productPrice.base);
//                    }
//                }


                currentObject.click(function (e) { 
                    e.preventDefault(); 
//                    if (jQuery(this).attr("data-productname")) {
//                        Engine.OpenQuickShop(jQuery(this).attr("title"));
//                    }

                });


                currentObject.tooltipex({
                    track: true,
                    delay: 0,
                    showURL: false,
                    showBody: " - ",
                    extraClass: "dynamicqs",
                    bodyHandler: function () {
//                        var n = jQuery(this);
//                        var price = n.attr("data-productprice");
//                        var name = n.attr("data-productname");
//                        var basePrice = n.attr("data-productbaseprice");

//                        var symbol = o.currencySymbol;
//                         
//                        var sale = "";
//                        var mSale = "";
//                        if(price != basePrice)
//                        {
//                             //On Sale
//                            sale = "&nbsp;&nbsp;<span class='qssale'>"+ o.currencySymbol + GenericHelper.PriceFormatter(basePrice)+"</span"; 
//                            mSale = "style='color:red;'";
//                        }

//                        if(name == null)
//                        {
//                            name = "Out of stock";
//                        }

//                        if(price == null)
//                        {
//                            symbol = "";
//                            basePrice = "";
//                            price = "";
//                            sale = "";
//                            msale = "";
//                        }

                        //return "<div class='dynamictitle'>Quick Shop</div><div class='dynamicname'>" + name + "</div><div class='dynamicprice' "+mSale+">" + symbol + GenericHelper.PriceFormatter(price) +  sale + "</div>";
                    
                        return "<div class='dynamictitle'>Quick Shop</div><div class='dynamicname'><br></div><div class='dynamicprice' ></div>";
                    
                    }
                });

            });
        }
    });

})(jQuery);



/*
Dynamic Loading of Products Plugin
Mihai V.
Ralph Lauren 2012
*/
(function ($) {
    $.fn.extend({
        DynamicProducts: function (options) {

          //Set the default values, use comma to separate the settings, example:
            var defaults = {
                data: [],
                style : 'top:20px;left:20px;',
                omnitureCallback : null
            }
                 
            var options =  $.extend(defaults, options);
            return this.each(function (currentIndex,val) {
                var o = options;
                var currentObject = $(this);
                if(currentObject.attr("data-style") != undefined)
                {
                    o.style = currentObject.attr("data-style");
                }

                var cont = $("<div></div>");
                cont.attr("style",o.style).css({position:"absolute"});
                var currentProducts = currentObject.attr("data-products").split(",");
                
                var displayProducts = [];
                $.each(currentProducts,function(i,n){
                    
                    for(var cp = 0;cp<o.data.length;cp++)
                    {
                        if(o.data[cp].productId == n)
                        {
                            displayProducts.push({ProductID : o.data[cp].productId, ProductName : o.data[cp].productTitle});
                            break;
                        }
                    }
                
                });

                /*Display Them*/
                if(displayProducts.length > 0)
                {
                
                    $.each(displayProducts, function(i,n){
                        var prod = $("<div data-product='"+n.ProductID+"' data-product-name='"+n.ProductName+"' class='product-cont' id='pcont-"+n.ProductID+"-"+(currentIndex+1)+"'>+ "+n.ProductName+"</div>");
                        cont.append(prod);
                     });

                     $(this).append(cont);

                     if(options.omnitureCallback != null)
                     {
                         /*Room for Improvement Here*/
                         $.each(displayProducts, function(i,n){
                             $("#pcont-"+n.ProductID+"-"+(currentIndex+1)).live("click", function(){ 
                               Engine.OpenQuickShop($(this).attr("data-product"));
                               options.omnitureCallback($(this).attr("data-product"),$(this).attr("data-product-name"),(currentIndex+1),currentObject);
                            });
                        });
                    }
                }

               
               
                
               

            });
        }
    });

})(jQuery);