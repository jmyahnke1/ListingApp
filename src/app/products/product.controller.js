(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductFactory'];

    /* @ngInject */
    function ProductController(ProductFactory) {
        var vm = this;
        ProductCtrl.searchProducts = ProductCtrl.searchProducts;
        vm.details = {};


        ////////////////////////////////////

        ProductCtrl.searchProducts = function(details) {
            ProductFactory
                .getProduct(details)
                .then(function(response) {
                    console.log(response);
                    //toastr.success("New property added");      
                }, function(error) {
                    console.log(error);
                })
        };
    }; //end of ProductController
})();