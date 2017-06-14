(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['ProductFactory', 'localStorageFactory', 'SweetAlert', '$state'] //, 'filepickerService'];

    /* @ngInject */
    function ProductController(ProductFactory, localStorageFactory, SweetAlert, $state) { //, filepickerService) {
        var vm = this;
        vm.sortByCategories = sortByCategories;
        var date = new Date();
        var todaysDateTime = date.toLocaleString();
        vm.CreationDate = todaysDateTime;
        vm.messageObject = {};
        vm.emailAddresses = [];
        vm.selectedEmail = "";
        vm.subject = "";
        vm.messageText = "";
        // vm.userId = {};
        // vm.messageObject.CreationDate = null;
        var currentProductId = 0;



        activate();

        function activate() {
            getCategories();
            getEmailAddress();
        }

        function getEmailAddress() {
            ProductFactory
                .getEmailAddresses()
                .then(function(response) {
                    console.log(response);
                    var userData = response.data;
                    for (var index = 0; index < userData.length; index++) {
                        vm.emailAddresses.push(userData[index].email);
                    }
                    //toastr.success("Something cool happened");      
                }, function(error) {
                    console.log(error);
                })
        };


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
                    SweetAlert.swal("Item posted. Hope it sells!");
                    $state.go('productfeed');
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
                    currentProductId = productId;
                }, function(error) {
                    console.log(error);
                })
        }

        vm.submitMessage = function() {
                var messageUser = localStorageFactory.getLocalStorage('setUserInfo');

                vm.messageObject.creationDate = todaysDateTime;
                vm.messageObject.userId = messageUser.userId;
                vm.messageObject.productId = currentProductId;
                vm.messageObject.messageText = vm.messageText;
                vm.messageObject.subject = vm.subject;

                vm.messageObject.isRead = false;

                ProductFactory
                    .postMessage(vm.messageObject)
                    .then(function(returned) {
                        SweetAlert.swal("Message Sent!");

                        console.log(returned.data);

                    }, function(error) {
                        alert("Message was unable to send");
                    })
            } //end of post message function
    }; //end of ProductController

})();