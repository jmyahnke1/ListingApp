(function(){
    'use strict';

    angular
        .module('app')
        .factory('LoginFactory', LoginFactory)

    LoginFactory.$inject = ['$http', 'localApi'];

    function LoginFactory($http, localApi) {
        var service = {
            userLoginSearch : userLoginSearch
        };

        return service;

        function userLoginSearch(details) {
            return $http ({
                method: 'GET',
                url: 'http://localhost:59820/api' + '/Users',
                params: details,
            }) .then(function (returned){
                return returned;
            }, function (error){
                return error;
            });
         }
    }
})();