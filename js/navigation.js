// var mainurl = "http://wohlig.io:81/callApi/noball/";
// var mainurl = "http://customcricketcompany.com/admin/index.php/";
// var mainurl = "http://localhost/cccbackend/index.php/";
// var mainurl = "http://192.168.0.22/cccbackend/index.php/";
var mainurl = "http://wohlig.co.in/cccbackend/index.php/";

var websiteurl = "http://customcricketcompany.com/";
// var websiteurl = "http://localhost:8080";

// var backendurl = "http://customcricketcompany.com/admin/";
// var backendurl = "http://192.168.0.22/cccbackend/index.php/";
var backendurl = "http://wohlig.co.in/cccbackend/index.php/";

var country = "";

// var imgurl = "http://customcricketcompany.com/admin/uploads/";
// var imgurl = "http://192.168.0.22/cccbackend/uploads/";
var imgurl = "http://wohlig.co.in/cccbackend/uploads/";

var adminurl = mainurl + "json/";
var countries = [{
  "value": "Please Select"
}, {
  "value": "Afganistan"
}, {
  "value": "Albania"
}, {
  "value": "Algeria"
}, {
  "value": "American Samoa"
}, {
  "value": "Andorra"
}, {
  "value": "Angola"
}, {
  "value": "Anguilla"
}, {
  "value": "Antigua &amp; Ba"
}, {
  "value": "Argentina"
}, {
  "value": "Armenia"
}, {
  "value": "Aruba"
}, {
  "value": "Australia"
}, {
  "value": "Austria"
}, {
  "value": "Azerbaijan"
}, {
  "value": "Bahamas"
}, {
  "value": "Bahrain"
}, {
  "value": "Bangladesh"
}, {
  "value": "Barbados"
}, {
  "value": "Belarus"
}, {
  "value": "Belgium"
}, {
  "value": "Belize"
}, {
  "value": "Benin"
}, {
  "value": "Bermuda"
}, {
  "value": "Bhutan"
}, {
  "value": "Bolivia"
}, {
  "value": "Bonaire"
}, {
  "value": "Bosnia &amp; Herzegovina"
}, {
  "value": "Botswana"
}, {
  "value": "Brazil"
}, {
  "value": "British Indian Ocean Ter"
}, {
  "value": "Brunei"
}, {
  "value": "Bulgaria"
}, {
  "value": "Burkina Faso"
}, {
  "value": "Burundi"
}, {
  "value": "Cambodia"
}, {
  "value": "Cameroon"
}, {
  "value": "Canada"
}, {
  "value": "Canary Islands"
}, {
  "value": "Cape Verde"
}, {
  "value": "Cayman Islands"
}, {
  "value": "Central African Republic"
}, {
  "value": "Chad"
}, {
  "value": "Channel Islands"
}, {
  "value": "Chile"
}, {
  "value": "China"
}, {
  "value": "Christmas Island"
}, {
  "value": "Cocos Island"
}, {
  "value": "Colombia"
}, {
  "value": "Comoros"
}, {
  "value": "Congo"
}, {
  "value": "Cook Islands"
}, {
  "value": "Costa Rica"
}, {
  "value": "Cote DIvoire"
}, {
  "value": "Croatia"
}, {
  "value": "Cuba"
}, {
  "value": "Curacao"
}, {
  "value": "Cyprus"
}, {
  "value": "Czech Republic"
}, {
  "value": "Denmark"
}, {
  "value": "Djibouti"
}, {
  "value": "Dominica"
}, {
  "value": "Dominican Republic"
}, {
  "value": "East Timor"
}, {
  "value": "Ecuador"
}, {
  "value": "Egypt"
}, {
  "value": "El Salvador"
}, {
  "value": "Equatorial Guinea"
}, {
  "value": "Eritrea"
}, {
  "value": "Estonia"
}, {
  "value": "Ethiopia"
}, {
  "value": "Falkland Islands"
}, {
  "value": "Faroe Islands"
}, {
  "value": "Fiji"
}, {
  "value": "Finland"
}, {
  "value": "France"
}, {
  "value": "French Guiana"
}, {
  "value": "French Polynesia"
}, {
  "value": "French Southern Ter"
}, {
  "value": "Gabon"
}, {
  "value": "Gambia"
}, {
  "value": "Georgia"
}, {
  "value": "Germany"
}, {
  "value": "Ghana"
}, {
  "value": "Gibraltar"
}, {
  "value": "Great Britain"
}, {
  "value": "Greece"
}, {
  "value": "Greenland"
}, {
  "value": "Grenada"
}, {
  "value": "Guadeloupe"
}, {
  "value": "Guam"
}, {
  "value": "Guatemala"
}, {
  "value": "Guinea"
}, {
  "value": "Guyana"
}, {
  "value": "Haiti"
}, {
  "value": "Hawaii"
}, {
  "value": "Honduras"
}, {
  "value": "Hong Kong"
}, {
  "value": "Hungary"
}, {
  "value": "Iceland"
}, {
  "value": "India"
}, {
  "value": "Indonesia"
}, {
  "value": "Iran"
}, {
  "value": "Iraq"
}, {
  "value": "Ireland"
}, {
  "value": "Isle of Man"
}, {
  "value": "Israel"
}, {
  "value": "Italy"
}, {
  "value": "Jamaica"
}, {
  "value": "Japan"
}, {
  "value": "Jordan"
}, {
  "value": "Kazakhstan"
}, {
  "value": "Kenya"
}, {
  "value": "Kiribati"
}, {
  "value": "Korea North"
}, {
  "value": "Korea South"
}, {
  "value": "Kuwait"
}, {
  "value": "Kyrgyzstan"
}, {
  "value": "Laos"
}, {
  "value": "Latvia"
}, {
  "value": "Lebanon"
}, {
  "value": "Lesotho"
}, {
  "value": "Liberia"
}, {
  "value": "Libya"
}, {
  "value": "Liechtenstein"
}, {
  "value": "Lithuania"
}, {
  "value": "Luxembourg"
}, {
  "value": "Macau"
}, {
  "value": "Macedonia"
}, {
  "value": "Madagascar"
}, {
  "value": "Malaysia"
}, {
  "value": "Malawi"
}, {
  "value": "Maldives"
}, {
  "value": "Mali"
}, {
  "value": "Malta"
}, {
  "value": "Marshall Islands"
}, {
  "value": "Martinique"
}, {
  "value": "Mauritania"
}, {
  "value": "Mauritius"
}, {
  "value": "Mayotte"
}, {
  "value": "Mexico"
}, {
  "value": "Midway Islands"
}, {
  "value": "Moldova"
}, {
  "value": "Monaco"
}, {
  "value": "Mongolia"
}, {
  "value": "Montserrat"
}, {
  "value": "Morocco"
}, {
  "value": "Mozambique"
}, {
  "value": "Myanmar"
}, {
  "value": "Nambia"
}, {
  "value": "Nauru"
}, {
  "value": "Nepal"
}, {
  "value": "Netherland Antilles"
}, {
  "value": "Netherlands (Holland, Europe)"
}, {
  "value": "Nevis"
}, {
  "value": "New Caledonia"
}, {
  "value": "New Zealand"
}, {
  "value": "Nicaragua"
}, {
  "value": "Niger"
}, {
  "value": "Nigeria"
}, {
  "value": "Niue"
}, {
  "value": "Norfolk Island"
}, {
  "value": "Norway"
}, {
  "value": "Oman"
}, {
  "value": "Pakistan"
}, {
  "value": "Palau Island"
}, {
  "value": "Palestine"
}, {
  "value": "Panama"
}, {
  "value": "Papua New Guinea"
}, {
  "value": "Paraguay"
}, {
  "value": "Peru"
}, {
  "value": "Philippines"
}, {
  "value": "Pitcairn Island"
}, {
  "value": "Poland"
}, {
  "value": "Portugal"
}, {
  "value": "Puerto Rico"
}, {
  "value": "Qatar"
}, {
  "value": "Republic of Montenegro"
}, {
  "value": "Republic of Serbia"
}, {
  "value": "Reunion"
}, {
  "value": "Romania"
}, {
  "value": "Russia"
}, {
  "value": "Rwanda"
}, {
  "value": "St Barthelemy"
}, {
  "value": "St Eustatius"
}, {
  "value": "St Helena"
}, {
  "value": "St Kitts-Nevis"
}, {
  "value": "St Lucia"
}, {
  "value": "St Maarten"
}, {
  "value": "St Pierre &amp; Miquelon"
}, {
  "value": "St Vincent &amp; Grenadines"
}, {
  "value": "Saipan"
}, {
  "value": "Samoa"
}, {
  "value": "Samoa American"
}, {
  "value": "San Marino"
}, {
  "value": "Sao Tome &amp; Principe"
}, {
  "value": "Saudi Arabia"
}, {
  "value": "Senegal"
}, {
  "value": "Serbia"
}, {
  "value": "Seychelles"
}, {
  "value": "Sierra Leone"
}, {
  "value": "Singapore"
}, {
  "value": "Slovakia"
}, {
  "value": "Slovenia"
}, {
  "value": "Solomon Islands"
}, {
  "value": "Somalia"
}, {
  "value": "South Africa"
}, {
  "value": "Spain"
}, {
  "value": "Sri Lanka"
}, {
  "value": "Sudan"
}, {
  "value": "Suriname"
}, {
  "value": "Swaziland"
}, {
  "value": "Sweden"
}, {
  "value": "Switzerland"
}, {
  "value": "Syria"
}, {
  "value": "Tahiti"
}, {
  "value": "Taiwan"
}, {
  "value": "Tajikistan"
}, {
  "value": "Tanzania"
}, {
  "value": "Thailand"
}, {
  "value": "Togo"
}, {
  "value": "Tokelau"
}, {
  "value": "Tonga"
}, {
  "value": "Trinidad &amp; Tobago"
}, {
  "value": "Tunisia"
}, {
  "value": "Turkey"
}, {
  "value": "Turkmenistan"
}, {
  "value": "Turks &amp; Caicos Is"
}, {
  "value": "Tuvalu"
}, {
  "value": "Uganda"
}, {
  "value": "Ukraine"
}, {
  "value": "United Arab Emirates"
}, {
  "value": "United Kingdom"
}, {
  "value": "United States of America"
}, {
  "value": "Uruguay"
}, {
  "value": "Uzbekistan"
}, {
  "value": "Vanuatu"
}, {
  "value": "Vatican City State"
}, {
  "value": "Venezuela"
}, {
  "value": "Vietnam"
}, {
  "value": "Virgin Islands (Brit)"
}, {
  "value": "Virgin Islands (USA)"
}, {
  "value": "Wake Island"
}, {
  "value": "Wallis &amp; Futana Is"
}, {
  "value": "Yemen"
}, {
  "value": "Zaire"
}, {
  "value": "Zambia"
}, {
  "value": "Zimbabwe"
}];
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http, $state) {
  var navigation = [{
    name: "Products",
    classis: ""
  }, {
    name: "Customise",
    classis: "",
    link: "#/home"
  }, {
    name: "Services",
    classis: "",
    link: "#/services"
  }, {
    name: "Extras",
    classis: "",
    link: "#/extras"
  }];

  var navigation2 = [{
    name: "ADVANCED CUSTOMISATION",
    anchor: "advancedcutomization",
  }, {
    name: "CUSTOM SPORTS APPAREL",
    anchor: "customapparel",
  }, {
    name: "CCC LOUNGE",
    anchor: "ccclounge",
  }, {
    name: "TOURS",
    anchor: "tours",
  }, {
    name: "FOUNDATION",
    anchor: "foundation",
  }, {
    name: "CONSULTANCY",
    anchor: "consultancy",
  }, {
    name: "MEMORABILIA",
    anchor: "memobrabilia",
  }];


  var navigation3 = [{
    name: "CLIENT EXAMPLES",
    anchor: "clientexamples",
  }, {
    name: "PRESS",
    anchor: "press",
  }, {
    name: "TESTIMONIALS",
    anchor: "testimonials",
  }];

  return {
    getnav: function() {
      return navigation;
    },
    getnav2: function() {
      return navigation2;
    },
    getnav3: function() {
      return navigation2;
    },
    getSlider: function(callback, err) {
      $http.get(adminurl + 'getSlide').success(callback).error(err);
    },
    //  deleteSaveDesign: function(id, callback) {
    //   $http.get(adminurl + 'deleteSaveDesign/' + id).success(callback);
    // },
    getCurrency: function(callback, err) {
      $http.get(adminurl + 'getCurrency').success(callback).error(err);
    },
    getCategory: function(callback, err) {
      $http.get(adminurl + 'getCategory').success(callback).error(err);
    },
    getCartCount: function(callback, err) {
      var currency = $.jStorage.get("myCurrency");
      return $http({
        url: adminurl + "getCartCount",
        method: "POST",
        data: {
          "currency": currency
        }
      }).success(function(data, status) {
        $.jStorage.set("cartCount", data.quantity);
        callback(data, status);
      }).error(err);
    },
       deleteSaveDesign: function(data,callback, err) {
         console.log('data',data);
      return $http({
        url: adminurl + "deleteSaveDesign",
        method: "POST",
        data: {
          "id": data
        }
      }).success(callback);
    },
    getSubCategory: function(name, callback, err) {
      $http.get(adminurl + 'getSubCategory?name=' + name).success(callback).error(err);
    },
    getProductBySubCategory: function(name, callback, err) {
      console.log(name);
      $http.get(adminurl + 'getProductBySubCategory?name=' + name + '&currency=' + $.jStorage.get("myCurrency")).success(callback).error(err);
    },
    getTestimonial: function(callback, err) {
      $http.get(adminurl + 'getTestimonial').success(callback).error(err);
    },
    getOrders: function(callback, err) {
      $http.get(adminurl + 'getOrders').success(callback).error(err);
    },
    addToCart: function(cart, callback, err) {
      var currency = $.jStorage.get("myCurrency");
      return $http({
        url: adminurl + "addToCart",
        method: "POST",
        data: {
          "product": cart.id,
          "quantity": cart.qty,
          "currency": currency,
          "json": ""
        }
      }).success(callback).error(err);
    },
    orderSummaryOdi: function(user, jsonData, ml, bl, rc, ls, rs, tl, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type,
        "mainsponserlogo": ml,
        "leftsleeve": ls,
        "rightsleeve": rs,
        "backsponser": bl,
        "teamlogo": tl,
        "rightchest": rc
      };
      
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "saveCustomizeOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    orderSummaryBat: function(user, jsonData, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type
      };
      
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "saveCustomizeOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    orderSummaryGloves: function(user, jsonData, tl, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type,
        "teamlogo": tl
      };
      
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "saveCustomizeOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    orderSummaryPads: function(user, jsonData, tl, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type,
        "teamlogo": tl
      };
      
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "saveCustomizeOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    getOrderSummary: function(id, callback, err) {
      var myData = {
        "id": id
      };
      // console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "getCustomizeOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    saveDesign: function(user, jsonData, type, callback, err) {
      var myData = {
        "user": user,
        "description": jsonData,
        "type": type
      };
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "saveDesign",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
        editSaveDesign: function(user, jsonData, type,id, callback, err) {
      var myData = {
        "user": user,
        "description": jsonData,
        "type": type,
        "id" :id
      };
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "editSaveDesign",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    getDesigns: function(user, callback, err) {
      var myData = {
        "user": user
      };
      return $http({
        url: adminurl + "getDesigns",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    saveOrderOdi: function(user, jsonData, ml, rc, ls, rs, bl, tl, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type,
        "mainsponserlogo": ml,
        "leftsleeve": ls,
        "rightsleeve": rs,
        "backsponser": bl,
        "teamlogo": tl,
        "rightchest": rc
      };
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "addCustomOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    saveOrderBat: function(user, jsonData, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type
      };
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl  + "addCustomOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    saveOrderGloves: function(user, jsonData, tl, type, callback, err) {
      var myData = {
        "email": user,
        "description": jsonData,
        "type": type,
        "teamlogo": tl
      };
      console.log(JSON.stringify(jsonData));
      return $http({
        url: adminurl + "addCustomOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    getAllCustomOrder: function(user, callback, err) {
      var myData = {
        "user": user
      };
      return $http({
        url: adminurl + "getAllCustomOrder",
        method: "POST",
        data: myData
      }).success(callback).error(err);
    },
    createCustom: function(custom, callback, err) {
      console.log(custom);
      return $http({
        url: adminurl + "createCustom",
        method: "POST",
        data: {
          "name": custom.name,
          "email": custom.email,
          "image": custom.image,
          "color": custom.color,
          "teamname": custom.teamname,
          "teaminitials": custom.teaminitials,
          "message": custom.message,
          "interest": custom.interest
        }
      }).success(callback).error(err);
    },
    fedexTrack: function(tracking_number, callback) {
      tracking_number = 123456789012;
      $http({
        url: 'https://www.fedex.com/trackingCal/track?data={"TrackPackagesRequest":{"appType":"WTRK","uniqueKey":"","processingParameters":{},"trackingInfoList":[{"trackNumberInfo":{"trackingNumber":' + tracking_number + ',"trackingQualifier":"","trackingCarrier":""}}]}}&action=trackpackages&locale=en_CA&version=1&formate=json',
        method: 'GET',
        withCredentials: false
      }).success(callback);

    },
    addToWishlist: function(wishlist, callback, err) {
      return $http({
        url: adminurl + "addToWishlist",
        method: "POST",
        data: {
          "product": wishlist.id,
          "quantity": wishlist.qty
        }
      }).success(callback).error(err);
    },
    removeFromWishlist: function(wishlist, callback, err) {
      return $http({
        url: adminurl + "removeFromWishlist",
        method: "POST",
        data: {
          "product": wishlist
        }
      }).success(callback).error(err);
    },
    removeFromCart: function(cart, callback, err) {
      console.log(cart);
      return $http({
        url: adminurl + "removeFromCart",
        method: "POST",
        data: {
          "cart": cart.id
        }
      }).success(callback).error(err);
    },
    login: function(login, callback, err) {
      console.log(login);
      return $http({
        url: adminurl + "login",
        method: "POST",
        data: {
          "email": login.email,
          "password": login.password
        }
      }).success(callback).error(err);
    },
    signup: function(signup, callback, err) {
      console.log(signup);
      return $http({
        url: adminurl + "signup",
        method: "POST",
        data: {
          "firstname": signup.firstname,
          "lastname": signup.lastname,
          "email": signup.email,
          "password": signup.password
        }
      }).success(callback).error(err);
    },
    contactSubmit: function(contact, callback, err) {
      return $http({
        url: adminurl + "contactSubmit",
        method: "POST",
        data: {
          "name": contact.name,
          "subject": contact.subject,
          "email": contact.email,
          "message": contact.message
        }
      }).success(callback).error(err);
    },
    localCountry: function(callback) {
      $.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?", callback)
    },
    updateProfile: function(profile, callback, err) {
      return $http({
        url: adminurl + "updateUser",
        method: "POST",
        data: profile
      }).success(callback).error(err);
    },
    changePassword: function(password, callback, err) {
      console.log(password);
      return $http({
        url: adminurl + "changePassword",
        method: "POST",
        data: {
          "email": password.email,
          "newpassword": password.newpassword,
          "oldpassword": password.oldpassword
        }
      }).success(callback).error(err);
    },
    forgotPassword: function(password, callback, err) {
      return $http({
        url: adminurl + "forgotPassword",
        method: "POST",
        data: {
          "email": password.email
        }
      }).success(callback).error(err);
    },
    resetPassword: function(request, callback, err) {
      return $http({
        url: adminurl + "forgotpasswordsubmit",
        method: "POST",
        data: {
          "password": request.password,
          "hashcode": request.hashcode
        }
      }).success(callback).error(err);
    },
    getWishlist: function(callback, err) {
      var currency = $.jStorage.get("myCurrency");
      console.log(currency);
      return $http({
        url: adminurl + "getWishlist",
        method: "POST",
        data: {
          "currency": currency
        }
      }).success(callback).error(err);
    },
    getWishlistCount: function(callback, err) {
      $http.get(adminurl + 'getWishlistCount').success(function(data, status) {
        $.jStorage.set("wishlistCount", data);
        callback(data, status);
      }).error(err);
    },
    checkoutCheck: function(callback, err) {
      $http.get(adminurl + 'checkoutCheck').success(callback).error(err);
    },
    placeOrder: function(order, callback, err) {
      var currency = $.jStorage.get("myCurrency");
      order.currency = currency;
      return $http({
        url: adminurl + "placeOrder",
        method: "POST",
        data: order
      }).success(callback).error(err);
    },
    authenticate: function(callback) {
      $http.get(adminurl + 'authenticate').success(callback);
    },
    getUserDetail: function(id, callback, err) {
      $http.get(adminurl + 'getUser?id=' + id).success(callback).error(err);
    },
    getProductDetail: function(req, callback, err) {
      $http.get(adminurl + 'getProductDetail?id=' + req.id + '&size=' + req.size + '&currency=' + $.jStorage.get("myCurrency")).success(callback).error(err);
    },
    showCart: function(callback, err) {
      return $http({
        url: adminurl + "showCart",
        method: "POST",
        data: {
          "currency": $.jStorage.get("myCurrency")
        }
      }).success(callback).error(err);

    },
    checkCoupon: function(coupon, callback) {
      return $http({
        url: adminurl + "checkCoupon",
        method: "POST",
        data: {
          "couponname": coupon,
          "currency": $.jStorage.get("myCurrency")
        }
      }).success(callback);
    },
    setCheckout: function(checkout, callback) {
      console.log(checkout);
      return $http({
        url: adminurl + "setCheckout",
        method: "POST",
        data: checkout
      }).success(callback);
    },
    logout: function(callback, err) {
      $http.get(adminurl + 'logout').success(callback).error(err);
    },
    setUser: function(user) {
      $.jStorage.set("user", user);
    },
    getUser: function() {
      return $.jStorage.get("user");
    },
    setPaypal: function(error) {
      $.jStorage.set("paypal_error", error);
    },
    getPaypal: function() {
      return $.jStorage.get("paypal_error");
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    makeactive2: function(id) {
      console.log(id);
      for (var i = 0; i < navigation2.length; i++) {
        if (navigation2[i].anchor == id) {
          navigation2[i].classis = "actives";
        } else {
          navigation2[i].classis = "";
        }
      }
      return id;
    },
  }
});
