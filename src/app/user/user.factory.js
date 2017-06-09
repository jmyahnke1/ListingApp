(function() {
    'use strict';

   angular
        .module('app')
        .factory('UserFactory', UserFactory);

   UserFactory.$inject = ['$http', 'localApi'];

   /* @ngInject */
    function UserFactory($http, localApi) {
        var service = {

            fileUsers: fileUsers

        };

       return service;

       function fileUsers(id) {
            return $http ({
                method: 'GET',
                url: localApi+'users/',
                params: id,
              }).then (function(returned){
                    return returned.data[0];
              }, function (error){
                  console.log("Error"+ error);
                return error;
              });

       }
    }
})();