(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProductFactory', ProductFactory);

    ProductFactory.$inject = ['$http', 'localApi', '$q'];

    /* @ngInject */
    function ProductFactory($http, localApi, $q) {
        var service = {
            getProductCategories: getProductCategories,
            postProduct: postProduct,
            getProductByCategories: getProductByCategories,
            getProduct: getProduct,
            postMessage: postMessage,
            getEmailAddresses: getEmailAddresses
        };

        return service;

        function getProductCategories() {
            return $http({
                method: 'GET',
                url: localApi + 'categories'
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });
        } //end of getProductCategories

        function getEmailAddresses() {
            return $http({
                method: 'GET',
                url: localApi + 'Users'
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error in getEmailAddresses" + error);
                return error;
            });
        } //end of getEmailAddresses


        function postProduct(product) {
            console.log(product);
            return $http({
                method: 'POST',
                url: localApi + 'products',
                data: product
                    // headers: {
                    //     'Content-Type': 'application/json; charset=utf-8'
                    // }
            }).then(function(info) {
                return info;
            }, function(error) {
                return error;
            })
        } //end of postProducts


        function getProductByCategories(categoryId) {
            return $http({
                method: 'GET',
                url: localApi + 'Products/GetProductByCategory?categoryId=' + categoryId,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
                // params: categoryId
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });
        }

        function getProduct(productId) {
            return $http({
                method: 'GET',
                url: localApi + 'Products/ProductDetails?search=' + productId,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });
        }


        function postMessage(message) {
            return $http({
                Method: 'POST',
                url: localApi + 'Messages',
                data: message
                    // headers: {
                    //     'Content-Type': 'application/json; charset=utf-8'
                    // }
            }).then(function(info) {
                return info;
            }, function(error) {
                return error;
            })
        } //end of postMessage function




    } //end of ProductFactory
})();