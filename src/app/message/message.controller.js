(function() {
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['MessageFactory', 'SweetAlert', 'localStorageFactory', '$state'];

    /* @ngInject */
    function MessageController(MessageFactory) {
        var vm = this;
        vm.messageObject = {};
        vm.messageObject.subject = "";
        vm.messageObject.messageText = "";


        /////////////////////////

        vm.submitMessage = function(messageObject) {
                messageObject.CreationDate = todaysDateTime;
                MessageFactory
                    .postMessage(messageObject)
                    .then(function(returned) {
                        SweetAlert.swal("Message Sent!");
                        var setId = returned.userId;
                        var setMessageId = returned.messageId;
                        console.log(returned.data);
                        localStorageFactory.setLocalStorage('userId', setId);
                        var getUserId = localStorageFactory.getLocalStorage('userId');
                        var getMessageId = localStorageFactory.setLocalStorage('messageId', setId);
                        console.log(getUserId);
                        console.log(getMessageId);
                    }, function(error) {
                        alert("Message was unable to send");
                    })
            } //end of post message function

        vm.messageHistory = function() {
                localStorageFactory.setLocalStorage('userId', setId);
                var getId = localStorageFactory.getLocalStorage('userId');
                MessageFactory
                    .getMessageById(userId)
                    .then(function(returned) {
                        //vm.selectedUser = data;
                        return (returned.messages.userId);
                        console.log(returned);
                        //vm.sorted = returned.data;
                    }, function(error) {
                        return (error);
                        console.log(error);
                    });
            } //end of get message function
    }
})();