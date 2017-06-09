(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeFactory', 'SweetAlert', '$state', 'localStorageFactory'];

    function HomeController(HomeFactory, SweetAlert, $state, localStorageFactory) {
        var vm = this;


        vm.links = [{
            'display': 'Welcome User!',
            'state': 'login'
        }, {
            'display': 'Product Feed',
            'state': 'productfeed'
        }, ];

        vm.status = {
            isopen: false
        };

        ///////////////////////////////////////////////////////

        vm.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        vm.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.status.isopen = !vm.status.isopen;
        };

        vm.signIn = function(userObject) {
            HomeFactory
                .userLoginSearch(userObject)
                .then(function(returned) {
                    SweetAlert.swal("Great job!");
                    console.log(returned.userId);

                    var setId = returned.userId;
                    localStorageFactory.setLocalStorage('userId', setId);
                    var getId = localStorageFactory.getLocalStorage('userId');
                    console.log(getId);

                    $state.go('profile');

                }, function(error) {
                    alert("Sign In Unsuccessful");
                })
        }

        vm.register = function(registrationObject) {
            HomeFactory
                .registerUser(registrationObject)
                .then(function(returned) {
                    SweetAlert.swal("Registration Complete!");
                    console.log(returned);
                }, function(error) {
                    alert("Registration Unsuccessful");
                })
        }





    };
})();