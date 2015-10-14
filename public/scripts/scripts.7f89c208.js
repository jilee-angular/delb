"use strict";angular.module("App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ng-token-auth","angularModalService","ui.bootstrap","ui.bootstrap.collapse","ngFileUpload"]).run(["$rootScope","$location",function(a,b){a.$on("auth:login-success",function(a){console.log(a),b.path("/")})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/sellmyproduct",{templateUrl:"views/sellmyproduct.html",controller:"SellProductCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/signin",{templateUrl:"views/user_sessions/new.html",controller:"UserSessionsCtrl"}).when("/signup",{templateUrl:"views/user_registrations/new.html",controller:"UserRegistrationsCtrl"}).when("/groups",{templateUrl:"views/groups.html",controller:"GroupsCtrl",resolve:{auth:["$auth",function(a){return a.validateUser()}]}}).when("/shoppingcart",{templateUrl:"views/shoppingcart.html",controller:"CartCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl"}).when("/list/:product",{templateUrl:"partials/product.html",controller:"StoreCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductCtrl"}).when("/products/:id",{templateUrl:"views/partials/product.html",controller:"ProductCtrl"}).when("/mystore",{templateUrl:"views/mystore.html",controller:"MystoreCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/favorites",{templateUrl:"views/favorites.html",controller:"FavoritesCtrl"}).when("/message",{templateUrl:"views/message.html",controller:"MessageCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).when("/history",{templateUrl:"views/history.html",controller:"HistoryCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/pleaselogin",{template:"<h3 class='container center mg-top-100 height-min600'>You must Log In or Sign Up to access the page.</h3>"}).otherwise({redirectTo:"/"})}]),angular.module("App").controller("MainCtrl",["$scope","ModalService","ListService",function(a,b,c){a.rotateBar=!0,a.loggedIn=!1,a.logo="images/delb.png",a.isCollapsed=!0,a.rotateUser=!0,a.rotateUserBar=!0,a.currentTabIndex=0,a.lists=[],a.selected=0,a.filters={},a.categories=[{title:"Featured",icon:"glyphicon-th-large",id:1},{title:"Top Seller",icon:"glyphicon-thumbs-up",id:2},{title:"Sale",icon:"glyphicon-tag",id:3},{title:"New",icon:"glyphicon-star",id:4},{title:"Used",icon:"glyphicon-cog",id:5},{title:"Other",icon:"glyphicon-cog",id:6}],a.menuTabs=[{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"}],a.showLogin=function(){b.showModal({templateUrl:"login.html",controller:"UserSessionsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("!!!")})})},a.showSignUp=function(){b.showModal({templateUrl:"signup.html",controller:"UserRegistrationsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("registration modal")})})},a.subItems=[{title:"Design",detail:"innovation"},{title:"Entertainment",detail:"pleasure"},{title:"Living",detail:"happiness"},{title:"Balance",detail:"peace"}],a.showTab=function(b){a.currentTabIndex=b,a.selected=b},$("#offcanvasRight").on("hide.bs.offcanvas",function(){a.rotateUserBar=!0,a.rotateUser=!0,a.$apply()}),$("#offcanvasRight > ul > li > a").click(function(){$(".navmenu").offcanvas("hide")}),a.lists=[{title:"product 1 sjdfkasdfjaksdlfja djfjas dksjadlfkj",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg",subCategory:"featured",id:123},{title:"Product 1",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg",subCategory:"top seller",id:789},{title:"Product 2 jsakdfjskfjks jskdajlsdfj ajdfasd ",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"sale",id:678},{title:"product 1",price:23.22,description:"sdjfkljsdkal ajskdlfaj ajsdkfal a sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Oh_Hai129.jpg",subCategory:"new",id:456,id:67},{title:"product 2",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"new"},{title:"product 5",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Nice_Shirt_Kitty.jpg",subCategory:"new",id:345},{title:"product 6",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Oh_Hai129.jpg",subCategory:"new",id:7897},{title:"product 8",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"featured",id:96},{title:"product 8",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.maplecityrubber.com/wp-content/uploads/2012/11/standard-05-orange.png",subCategory:"featured",id:8758},{title:"product 8",price:23.22,description:"sdjfkla sjdkfaljskdf",image:"http://www.funnycatpix.com/_pics/Oh_Hai129.jpg",subCategory:"featured",id:97}]}]),angular.module("App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("ListCtrl",["$http","$scope","ListService",function(a,b,c){b.heading="List",b.lists=[],b.successMsg="",b.errorMsg="",b.currentTabIndex=1,b.selectedCategory="Select Category",b.getList=function(){c.getListItems().success(function(a){b.lists=a}).error(function(){b.errorMsg="can't get the list"})},b.selectedCategory,b.dropdownCategorySelect=function(a){b.selectedCategory=a,b.category=a},b.addList=function(){c.postListItem(b.title,b.category,b.price,b.description).success(function(){b.successMsg="Uploaded successfully"}).error(function(){b.errorMsg="oops!"}),b.title="",b.category="",b.price="",b.description="",b.selectedCategory="Select a category",b.getList()},b.deleteList=function(c){a["delete"]("/api/v1/list/"+c).success(function(){console.log("success")}).error(function(){console.log("fail")}),b.getList()},b.showTab=function(a){b.currentTabIndex=a},b.items=["Accessories","Arts & Craft","Bags","Beauty","Clothing","Craft","Electronics","Home","Jewerly","Kids","Party","Pets","Shoes","Toys","Weddings"],b.getList()}]),angular.module("App").controller("ProductCtrl",["$scope","$routeParams",function(a,b){a.id=b.id}]),angular.module("App").controller("FormCtrl",["$scope",function(a){a.areaCode=["3000","3001","3002"]}]),angular.module("App").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("GroupsCtrl",["$scope",function(a){a.groups=["Group 1","Group 2","Group 3"]}]),angular.module("App").controller("CarouselCtrl",["$scope",function(a){a.myInterval=9e3,a.noWrapSlides=!1;var b=a.slides=[{image:"http://i.imgur.com/rrDG6B5.png"},{image:"http://i.imgur.com/UfVQ26j.png"},{image:"http://i.imgur.com/Sc9vyP2.png"}];a.addSlide=function(){var a=600+b.length+1;b.push({image:"//placekitten.com/"+a+"/300",text:["More","Extra","Lots of","Surplus"][b.length%4]+" "+["Cats","Kittys","Felines","Cutes"][b.length%4]})};for(var c=0;0>c;c++)a.addSlide()}]),angular.module("App").controller("FavoritesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("CartCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("MystoreCtrl",["$scope","$rootScope","Upload","$timeout",function(a,b,c,d){console.log(b.user.name),a.user=b.user,b.user.name?(a.name=b.user.name,a.email=b.user.email):a.name="Your Store",a.$watch("files",function(){a.upload(a.files)}),a.$watch("file",function(){null!=a.file&&a.upload([a.file])}),a.log="",a.upload=function(b){if(b&&b.length)for(var e=0;e<b.length;e++){var f=b[e];f.$error||c.upload({url:"https://angular-file-upload-cors-srv.appspot.com/upload",data:{username:a.username,file:f}}).progress(function(b){var c=parseInt(100*b.loaded/b.total);a.log="progress: "+c+"% "+b.config.file.name+"\n"+a.log}).success(function(b,c,e,f){d(function(){a.log="file: "+f.file.name+", Response: "+JSON.stringify(b)+"\n"+a.log})})}}}]),angular.module("App").controller("MessageCtrl",["$scope","$rootScope",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],console.log(b),a.user=b.user,a.name=b.user.name,a.email=b.user.email}]),angular.module("App").controller("HistoryCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("AccountCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("UserSessionsCtrl",["$scope",function(a){a.$on("auth:login-error",function(b,c){a.error="something wrong"})}]),angular.module("App").controller("UserRegistrationsCtrl",["$scope","$location","$auth",function(a,b,c){a.$on("auth:registration-email-error",function(b,c){a.error=c.errors[0]}),a.handleRegBtnClick=function(){c.submitRegistration(a.registrationForm).then(function(){c.submitLogin({email:a.registrationForm.email,password:a.registrationForm.password})})}}]),angular.module("App").factory("ListService",["$http",function(a){var b={GetListItems:"/api/v1/list.json",PostListItem:"/api/v1/list"};return{getListItems:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetListItems)},postListItem:function(c,d,e,f){return a.post(b.PostListItem,{title:c,category:d,price:e,description:f,image:image,discount:discount,location:location,sex:sex})}}}]),angular.module("App").directive("loading",["$http",function(a){return{restrict:"A",link:function(b,c,d){b.isLoading=function(){return a.pendingRequests.length>0},b.$watch(b.isLoading,function(a){a?c.removeClass("ng-hide"):c.addClass("ng-hide")})}}}]);