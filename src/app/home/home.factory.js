(function() {
    'use strict';

    angular
        .module('app')
        .factory('HomeFactory', HomeFactory);

    HomeFactory.$inject = ['$http', 'localApi'];

    function HomeFactory($http, localApi) {
        var service = {
            categoriesGrab: categoriesGrab
        };

        return service;

        ////////////////

        function categoriesGrab(allCats) {
            return $http({
                method: 'GET',
                url: localApi + 'categories',
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });


        }
    }
})();