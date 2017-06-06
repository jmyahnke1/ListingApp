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



// $http({
//   method: 'GET',
//   url: '/someUrl'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });