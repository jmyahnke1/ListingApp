(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductFactory'];

    /* @ngInject */
    function ProductController(ProductFactory) {
        var vm = this;
        vm.menuItems = [{
                'name': 'Antiques',
                'categoryId': '1'
            },
            {
                'name': 'Appliances',
                'categoryId': '2'
            },
            {
                'name': 'Boats',
                'categoryId': '3'
            },
            {
                'name': 'Cars',
                'categoryId': '4'
            },
            {
                'name': 'Books',
                'categoryId': '5'
            },
            {
                'name': 'Phones',
                'categoryId': '6'
            },
            {
                'name': 'Video Games',
                'categoryId': '7'
            },
            {
                'name': 'Electronics',
                'categoryId': '8'
            },
            {
                'name': 'Wanted',
                'categoryId': '9'
            },
            {
                'name': 'Other',
                'categoryId': '10'
            },
        ];


        ////////////////////////////////////

        vm.getCategories = function(details) {
            ProductFactory
                .getProductCategories(details)
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






        }; //end of ProductController
    }
})();
