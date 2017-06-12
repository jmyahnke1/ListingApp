(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductFactory'] //, 'filepickerService'];

    /* @ngInject */
    function ProductController(ProductFactory) { //, filepickerService) {
        var vm = this;
        vm.sortByCategories = sortByCategories;
        var date = new Date();
        var todaysDateTime = date.toLocaleString();
        vm.CreationDate = todaysDateTime;
        vm.messageObject = {};
        // vm.messageObject.CreationDate = null;

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
        } //end of sortByCategories

        // FilePicker injector
        // add photo to listing
        // Upload Photo
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

        vm.getProductDetails = function(productId) {
            ProductFactory
                .getProduct(productId)
                .then(function(returned) {
                    console.log(returned);
                    vm.detailedProducts = returned.data[0];
                    vm.detailsPanel = true;
                }, function(error) {
                    console.log(error);
                })
        }

        vm.submitMessage = function() {
                vm.messageObject.CreationDate = todaysDateTime;
                ProductFactory
                    .postMessage(vm.messageObject)
                    .then(function(returned) {
                        SweetAlert.swal("Message Sent!");
                        var setId = returned.userId;
                        var setMessageId = returned.messageId;
                        console.log(returned.data);
                        localStorageFactory.setLocalStorage('userId', setId);
                        var getUserId = localStorageFactory.getLocalStorage('userId');
                        var getMessageId = localStorageFactory.setLocalStorage('messageId', setId);
                        console.log(getUserId);
                        console.log(getMessageId);
                    }, function(error) {
                        alert("Message was unable to send");
                    })
            } //end of post message function
    }; //end of ProductController

})();