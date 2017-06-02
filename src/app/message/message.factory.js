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

 function getMessage(messageHistory) {
            return $http({
                Method: 'GET',
                url: localApi + 'Messages/MessageHistory',
                params: searchParameters
            }).then(function (response) {
                return response;
            }, function (error) {
                console.log("Error" + error);
                return error;
            });
        }//end of getMessage function

        function postMessage(messages) {

            return $http({
                Method: 'Post',
                url: localApi + '/Messages',
                dataType: 'json',
                data: messages,
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