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
            postProduct: postProduct
        };

        return service;

        function getProductCategories(details) {
            return $http({
                method: 'GET',
                url: localApi + 'categories',
                params: details,
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


    } //end of ProductFactory
})();

