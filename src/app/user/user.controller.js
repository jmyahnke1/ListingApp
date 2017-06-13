(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['UserFactory', 'localStorageFactory'];

    /* @ngInject */
    function UserController(UserFactory, localStorageFactory) {

        var vm = this;

        // vm.title = 'UserController';
        vm.userDetail = {};
        vm.userDetail.phoneNumber = "";
        vm.userDetail.birthdate = "";
        vm.userDetail.password = "";
        vm.userDetail.zipCode = "";
        vm.userDetail.userName = "";
        vm.userDetail.email = "";
        // vm.userDetail.id = 0;
        // vm.userId = 1;


        activate();

        function activate() {
            var userInfo = localStorageFactory.getLocalStorage('setUserInfo');
            vm.userDetail.phoneNumber = userInfo.phoneNumber;
            vm.userDetail.birthdate = userInfo.birthdate;
            vm.userDetail.password = userInfo.password;
            vm.userDetail.zipCode = userInfo.zipCode;
            vm.userDetail.userName = userInfo.userName;
            vm.userDetail.email = userInfo.email;
        }



        vm.getInfo = function() {
            UserFactory
                .fileUsers(vm.userId)
                .then(function(response) {
                    console.log(response);
                    vm.userDetail.userName = response.userName;
                    vm.userDetail.zipCode = response.zipCode;
                    vm.userDetail.birthdate = response.birthdate;
                    vm.userDetail.password = response.password;
                    vm.userDetail.email = response.email;
                    vm.userDetail.phoneNumber = response.phoneNumber;
                    //toastr.success("Here we go!");      
                }, function(error) {
                    console.log(error);
                })
        };

        // vm.updateInfo = function() {
        //     UserFactory
        //         .changeInfo()
        //         .then(function(response) {
        //             console.log(response);
        //         }, function(error) {
        //             console.log(error);
        //         })
        // };







    }

})();