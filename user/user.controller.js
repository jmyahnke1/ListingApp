(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = [''];

    /* @ngInject */
    function UserController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
