(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeFactory', 'SweetAlert', '$state', 'localStorageFactory'];

    function HomeController(HomeFactory, SweetAlert, $state, localStorageFactory) {
        var vm = this;
        vm.showResults = false;

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

                    // var setId = returned.userId;
                    // localStorageFactory.setLocalStorage('userId', setId);
                    // var getId = localStorageFactory.getLocalStorage('userId');

                    // console.log(getId);

                    var setAll = returned;
                    localStorageFactory.setLocalStorage('setUserInfo', setAll);
                    var getUserInfo = localStorageFactory.getLocalStorage('setUserInfo');
                    // var userInfo = getUserInfo;
                    // console.log(userInfo);

                    $state.go('profile');

                }, function(error) {
                    SweetAlert.swal("Login failed miserably.", "warning");
                })
        }

        vm.register = function() {
            vm.showResults = true;
        }


        vm.submitRegistration = function(registrationObject) {
            HomeFactory
                .registerUser(registrationObject)
                .then(function(returned) {
                    SweetAlert.swal("Registration Complete!");
                    vm.showResults = false;
                    console.log(returned);
                }, function(error) {
                    alert("Registration Unsuccessful");
                })
        }

        vm.doLogOut = function() {
            localStorageFactory.logout();
            SweetAlert.swal("You logged out like a pro.")
            $state.go('login');
        };
    };
})();