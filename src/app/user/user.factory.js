(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http', 'localApi'];

    /* @ngInject */
    function UserFactory($http, localApi) {
        var service = {
            fileUsers: fileUsers,
            changeInfo: changeInfo,
            getMessageById: getMessageById
        };

        return service;

        function fileUsers(id) {
            return $http({
                method: 'GET',
                url: localApi + 'users/',
                params: id,
            }).then(function(returned) {
                return returned.data[0];
            }, function(error) {
                console.log("Error" + error);
                return error;
            });

        }

        function changeInfo(updatedInfo, user) {
            return $http({
                method: 'PUT',
                url: localApi + 'users/' + updatedInfo,
                data: user,
            }).then(function(returned) {
                return returned;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });
        }

        function getMessageById(id) {
            console.log(id);
            return $http({
                Method: 'GET',
                url: localApi + 'Messages/GetReceivedMessages?ToUserID=' + id
                    //params: id

            }).then(function(response) {
                return response.data;
            }, function(error) {
                console.log("Error" + error);
                return error;
            });
        } //end of getMessage function




    }
})();