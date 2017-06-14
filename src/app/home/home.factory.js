(function() {
    'use strict';

    angular
        .module('app')
        .factory('HomeFactory', HomeFactory);

    HomeFactory.$inject = ['$http', 'localApi'];

    function HomeFactory($http, localApi) {
        var service = {
            categoriesGrab: categoriesGrab,
            userLoginSearch: userLoginSearch,
            registerUser: registerUser
        };

        return service;

        ////////////////

        function categoriesGrab(allCats) {
            return $http({
                method: 'GET',
                url: localApi + 'categories'
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            })
        }

        function userLoginSearch(id) {
            return $http({
                method: 'GET',
                url: localApi + 'Users/UserSearch',
                params: id
            }).then(function(returned) {
                return returned.data[0];
            }, function(error) {
                return error;
            });
        }

        function registerUser(details) {
            return $http({
                method: 'Post',
                url: localApi + 'Users',
                data: details
            }).then(function(returned) {
                return returned;
            }, function(error) {
                return error;
            });
        }
    }
})();