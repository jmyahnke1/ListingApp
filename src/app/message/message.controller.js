(function() {
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController);
    MessageController.$inject = ['messageFactory', 'toastr'];

    /* @ngInject */
    function MessageController(messageFactory, toastr) {
        var vm = this;
        vm.messageObject = {};
        vm.messageObject.subject = "";
        vm.messageObject.messageText = "";
        var date = new Date();
        var todaysDateTime = date.toLocaleString();
        vm.CreationDate = todaysDateTime;
      
        /////////////////////////

        vm.submit = function(messageObject) {
             messageObject.CreationDate = todaysDateTime;
            messageFactory.postMessage(messageObject)
                          .then(function(data){
                    SweetAlert.swal("Message Sent!");
                    console.log(returned.data);
                }, function (error) {
                    alert("Message was unable to send");
                })
        }//end of signIn function
        
        vm.messageHistory = function(id){
            MessageFactory
            .getMessageById(id)
            .then(function (data){
                //vm.selectedUser = data;
                return(returned.data);
                console.log(returned.data);
            },function (error){
                return (error);
                console.log(error);
            });
        }
    }
})();
