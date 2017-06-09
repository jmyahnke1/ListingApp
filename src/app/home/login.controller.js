(function(){
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController)

    LoginController.$inject = ['LoginFactory', 'toastr'];

    function LoginController(LoginFactory, toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.LoginController = LoginController;
        vm.userObject = {};
        vm.userObject.email = "";
        vm.userObject.password = "";
        //vm.signedIn = true;


        function signIn(userObject) { 
            LoginFactory
                .userLoginSearch(userObject)
                .then(function (returned){
                    alert("Sign In Successfully!");
                    //var name = localStorageService.get('username');
                    //vm.signedIn = false;
                }, function (error){
                    return ("Sign In Unsuccessful");
                })
        }
    }
})();
