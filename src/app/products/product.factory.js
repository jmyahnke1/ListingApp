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
            getProductByCategories: getProductByCategories
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
        } //end of getProductDetails

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


        function getProductByCategories(products) {
            return $http({
                method: 'GET',
                url: localApi + 'Products/GetProductByCategory',
                params: products,
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });


        }




    } //end of ProductFactory
})();