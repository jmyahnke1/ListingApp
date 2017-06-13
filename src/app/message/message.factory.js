(function() {
    'use strict';

    angular
        .module('app')
        .factory('MessageFactory', MessageFactory);
    MessageFactory.$inject = ['$http', 'localApi'];

    /* @ngInject */
    function MessageFactory($http, localApi) {
        var service = {
            getMessage: getMessage,
            postMessage: postMessage

        };

        return service;

        function getMessageById(id) {
            return $http({
                Method: 'GET',
                url: 'http://localhost:59820/api' + 'Messages' + UserId,
                params: searchParameters
            }).then(function(response) {
                return response.data.messages[0];
            }, function(error) {
                console.log("Error" + error);
                return error;
            });
        } //end of getMessage function


    }
})();