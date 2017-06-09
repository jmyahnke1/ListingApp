(function() {
    'use strict';

    angular
        .module('app')
        .factory('MessageFactory', MessageFactory);
    MessageFactory.$inject = ['$http', 'localApi'];

    /* @ngInject */
    function MessageFactory($http, localApi) {
        var service = {
            getMessage : getMessage,
            postMessage : postMessage

        };

        return service;

 function getMessageById(id) {
            return $http({
                Method: 'GET',
                url: 'http://localhost:59820/api' + 'Messages' + UserId,
                params: searchParameters
            }).then(function (response) {
                return response.data.messages[0];
            }, function (error) {
                console.log("Error" + error);
                return error;
            });
        }//end of getMessage function

        function postMessage(message) {
            return $http({
                Method: 'Post',
                url: 'http://localhost:59820/api' + 'Messages',
                dataType: 'json',
                data: message,
                headers:
                 {
                      'Content-Type': 'application/json; charset=utf-8'
                 }
            }).then(function(info) {
              return info;
            },function(error) {
              return error;
            })
        }//end of postMessage function
    }
})();
