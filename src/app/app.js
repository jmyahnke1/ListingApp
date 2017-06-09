(function() {
    'use strict';

    angular
        .module('app', ['oitozero.ngSweetAlert', 'socialLogin', 'ui.router', 'socialLogin', 'ui.bootstrap', 'LocalStorageModule'])
        .value('localApi', 'http://localhost:59820/api/')

        .config(function($stateProvider, $urlRouterProvider, socialProvider, localStorageServiceProvide, filepickerProvider) {

            filepickerProvider.setKey('  AMLMV2FACSqydDqkcATtaz');
            localStorageServiceProvider.setPrefix('app').setStorageType('sessionStorage').setNotify(true, true);


            $urlRouterProvider.otherwise("/main");

            $stateProvider
                .state('main', {
                    url: "/main",
                    templateUrl: "main.html",
                    controller: "HomeController",
                    controllerAs: "HomeCtrl"
                })

            .state('login', {
                url: "/fblogin",
                templateUrl: "app/home/fblogin.html",
                controller: "HomeController",
                controllerAs: "HomeCtrl"
            })

            .state('productfeed', {
                url: "/productfeed",
                templateUrl: "/app/products/product.feed.html",
                controller: "ProductController",
                controllerAs: "ProductCtrl"
            })

            .state('addproduct', {
                url: "/addproduct",
                templateUrl: "/app/products/product.add.html",
                controller: "ProductController",
                controllerAs: "ProductCtrl"
            })

            .state('profile', {
                url: "/profile",
                templateUrl: "/app/user/profile.html",
                controller: "UserController",
                controllerAs: "UserCtrl"
            });
        }); // end of angular module
})();

