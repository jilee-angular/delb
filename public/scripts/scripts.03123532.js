"use strict";angular.module("App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ng-token-auth","angularModalService"]).run(["$rootScope","$location",function(a,b){a.$on("auth:login-success",function(a){console.log(a),b.path("/")})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/signin",{templateUrl:"views/user_sessions/new.html",controller:"UserSessionsCtrl"}).when("/signup",{templateUrl:"views/user_registrations/new.html",controller:"UserRegistrationsCtrl"}).when("/groups",{templateUrl:"views/groups.html",controller:"GroupsCtrl",resolve:{auth:["$auth",function(a){return a.validateUser()}]}}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl",resolve:{auth:["$auth",function(a){return a.validateUser()}]}}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("App").controller("MainCtrl",["$scope","ModalService","$auth",function(a,b,c){a.rotateBar=!0,a.loggedIn=!1,a.logo="images/delb.png",a.showLogin=function(){b.showModal({templateUrl:"login.html",controller:"UserSessionsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("!!!")})})},a.showSignUp=function(){b.showModal({templateUrl:"signup.html",controller:"UserRegistrationsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("registration modal")})})}}]),angular.module("App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("ListCtrl",["$http","$scope","ListService",function(a,b,c){b.heading="List",b.lists=[],b.successMsg="",b.errorMsg="",b.currentTabIndex=1,b.getList=function(){c.getListItems().success(function(a){b.lists=a}).error(function(){b.errorMsg="can't get the list"})},b.addList=function(){c.postListItem(b.title,b.category,b.price,b.description).success(function(){b.successMsg="Uploaded successfully"}).error(function(){b.errorMsg="oops!"}),b.title="",b.category="",b.price="",b.description="",b.getList()},b.deleteList=function(c){a["delete"]("/api/v1/list/"+c).success(function(){console.log("success")}).error(function(){console.log("fail")}),b.getList()},b.showTab=function(a){b.currentTabIndex=a},b.getList()}]),angular.module("App").controller("FormCtrl",["$scope",function(a){a.areaCode=["3000","3001","3002"]}]),angular.module("App").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("GroupsCtrl",["$scope",function(a){a.groups=["Group 1","Group 2","Group 3"]}]),angular.module("App").controller("UserSessionsCtrl",["$scope",function(a){a.$on("auth:login-error",function(b,c){a.error="something wrong"})}]),angular.module("App").controller("UserRegistrationsCtrl",["$scope","$location","$auth",function(a,b,c){a.$on("auth:registration-email-error",function(b,c){a.error=c.errors[0]}),a.handleRegBtnClick=function(){c.submitRegistration(a.registrationForm).then(function(){c.submitLogin({email:a.registrationForm.email,password:a.registrationForm.password})})}}]),angular.module("App").factory("ListService",["$http",function(a){var b={GetListItems:"/api/v1/list.json",PostListItem:"/api/v1/list"};return{getListItems:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetListItems)},postListItem:function(c,d,e,f){return a.post(b.PostListItem,{title:c,category:d,price:e,description:f})}}}]);