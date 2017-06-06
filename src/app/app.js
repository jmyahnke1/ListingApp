(function () {
    'use strict';

    var app = angular.module('app', ['ui.router', 'LocalStorageModule']).value('localApi', 'http://localhost:59820/api/');

    app.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

        localStorageServiceProvider.setPrefix('app').setStorageType('sessionStorage').setNotify(true,true);
        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise("/index");

        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "index.html",
                controller: "HomeController",
                controllerAs : "HomeCtrl"
            })

            .state("product", {
                url: "/products",
                templateUrl: "products/product.category.html",
                controller:"ProductController",
                controllerAs:"ProductCtrl"
            })

            .state("user", {
                url: "/profile",
                templateUrl: "user/profile.html",
                controller:"UserController",
                controllerAs:"UserCtrl"
            })

            .state("message", {
                url: "/message",
                templateUrl: "message/message.html",
                controller:"MessageController",
                controllerAs:"MessageCtrl"
            })

    });

})();
