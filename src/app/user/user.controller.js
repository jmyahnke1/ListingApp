(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['UserFactory', 'localStorageFactory', 'SweetAlert'];

    /* @ngInject */
    function UserController(UserFactory, localStorageFactory, SweetAlert) {

        var vm = this;
        vm.today = new Date();

        // vm.title = 'UserController';
        vm.userDetail = {};
        vm.userDetail.PhoneNumber = "";
        vm.userDetail.Birthdate = "";
        vm.userDetail.Password = "";
        vm.userDetail.ZipCode = "";
        vm.userDetail.UserName = "";
        vm.userDetail.Email = "";
        var userInfo = {};
        // vm.userDetail.id = 0;
        // vm.userId = 1;


        activate();

        function activate() {
            userInfo = localStorageFactory.getLocalStorage('setUserInfo');
            vm.userDetail.phoneNumber = userInfo.phoneNumber;
            vm.userDetail.birthdate = userInfo.birthdate;
            vm.userDetail.password = userInfo.password;
            vm.userDetail.zipCode = userInfo.zipCode;
            vm.userDetail.userName = userInfo.userName;
            vm.userDetail.email = userInfo.email;
        }



        // vm.getInfo = function() {
        //     UserFactory
        //         .fileUsers(vm.userId)
        //         .then(function(response) {
        //             console.log(response);
        //             vm.userDetail.userName = response.userName;
        //             vm.userDetail.zipCode = response.zipCode;
        //             vm.userDetail.birthdate = response.birthdate;
        //             vm.userDetail.password = response.password;
        //             vm.userDetail.email = response.email;
        //             vm.userDetail.phoneNumber = response.phoneNumber;
        //             //toastr.success("Here we go!");      
        //         }, function(error) {
        //             console.log(error);
        //         })
        // };

        vm.updateInfo = function() {

            userInfo.phoneNumber = vm.userDetail.phoneNumber;
            userInfo.birthdate = vm.userDetail.birthdate;
            userInfo.password = vm.userDetail.password;
            userInfo.zipCode = vm.userDetail.zipCode;
            userInfo.userName = vm.userDetail.userName;
            userInfo.email = vm.userDetail.email;

            UserFactory
                .changeInfo(userInfo.userId, userInfo)
                .then(function(response) {
                    console.log(response);
                    SweetAlert.swal("Profile has been gloriously updated!");
                }, function(error) {
                    console.log(error);
                })

            localStorageFactory.setLocalStorage('setUserInfo', userInfo);
        };
        vm.messageHistory = function() {
                // var userId = localStorageFactory.setLocalStorage('userId', setId);
                var getId = localStorageFactory.getLocalStorage('setUserInfo');

                UserFactory
                    .getMessageById(getId.userId)
                    .then(function(returned) {
                        //vm.selectedUser = data;
                        vm.returnMessage = returned;
                        console.log(returned);
                        return (returned);
                        //vm.sorted = returned.data;
                    }, function(error) {
                        console.log(error);
                        return (error);
                    });
            } //end of get message function;;






    }

})();