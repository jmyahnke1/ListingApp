(function() {
    'use strict';

   angular
        .module('app')
        .factory('UserFactory', UserFactory);

   UserFactory.$inject = ['$http', 'localApi'];

   /* @ngInject */
    function UserFactory($http, localApi) {
        var service = {
            searchUsers: searchUsers
        };

       return service;

       function searchUsers(details){
                 return $http ({
                    method: 'GET',
                    url: localApi+'/users',
                    params: details,
                 }).then (function(returned){
                    return returned;
                }, function (error){
                      console.log("Error"+ error);
                     return error;
                   });

       }
    }
})();