(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductFactory'];

    /* @ngInject */
    function ProductController(ProductFactory) {
        var vm = this;
        vm.sortByCategories = sortByCategories;

        activate();

        function activate() {
            getCategories();
        }

        function getCategories() {
            ProductFactory
                .getProductCategories()
                .then(function(response) {
                    console.log(response);
                    vm.categories = response.data;
                    //toastr.success("Something cool happened");      
                }, function(error) {
                    console.log(error);
                })
        };

        vm.addProduct = function(product) {
            ProductFactory
                .postProduct(product)
                .then(function(response) {
                    console.log(response);
                    // postList(response);
                }, function(error) {
                    console.log(error);
                });
        }

        function sortByCategories() {

            ProductFactory
                .getProductByCategories(vm.selectedValue)
                .then(function(returned) {
                    console.log(returned);
                    vm.sorted = returned.data;
                }, function(error) {
                    console.log(error);
                })
        }

    }; //end of ProductController

})();