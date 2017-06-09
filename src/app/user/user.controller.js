(function() {
    'use strict';

   angular
        .module('app')
        .controller('UserController', UserController);

   UserController.$inject = ['UserFactory',  'LocalStorageFactory'];

   /* @ngInject */
    function UserController(UserFactory,  LocalStorageFactory)  {

       var vm = this;

       vm.title = 'UserController';        
       vm.searchDetail = {};
        vm.searchDetail.phoneNumber = "";
        vm.searchDetail.birthdate = "";
        vm.searchDetail.password = "";
        vm.searchDetail.zipCode = 0;
        vm.searchDetail.userName = "";
        vm.searchDetail.email = "";
        vm.showResults = false;


     
    }

})();