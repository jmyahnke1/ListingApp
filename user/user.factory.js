(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = [''];

    /* @ngInject */
    function UserFactory() {
        var service = {
            function: function
        };

        return service;

        function function() {

        }
    }
})();
