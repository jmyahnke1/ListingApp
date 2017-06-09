(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProductFactory', ProductFactory);

    ProductFactory.$inject = ['$http', 'localApi', '$q', 'FilePicker'];

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


        //FilePicker injector
        //add photo to listing
        //Upload Photo
        vm.uploadPhoto = function() {
            filepickerService.pick({
                    mimetype: 'image/*',
                    container: 'modal',
                    services: ['computer', 'facebook']
                },
                function onSuccess(Blob) {
                    console.log(Blob);
                    vm.listing.listingImage = Blob.url + "+" + Blob.filename;
                })
        }

        //update Photo
        vm.updatePhoto = function() {
            filepickerService.pick({
                    mimetype: 'image/*',
                    container: 'modal',
                    services: ['computer', 'facebook']
                },
                function onSuccess(Blob) {
                    console.log(Blob);
                    vm.hostListing.listingImage = Blob.url + "+" + Blob.filename;
                })
        }





    } //end of ProductFactory
})();