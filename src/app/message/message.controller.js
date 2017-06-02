(function() {
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController);

    MessageController.$inject = ['messageFactory', 'toastr'];

    /* @ngInject */
    function MessageController(messageFactory, toastr) {
        var vm = this;
        vm.messageController = messageController;
        vm.messageObject = { };
        vm.messageObject.userName = "";
        vm.messageObject.subject = "";
        vm.messageObject.item = "";
        vm.messageObject.text = "";
        var date = new Date();
        var todaysDateTime = date.toLocaleString();
        vm.CreationDate = todaysDateTime;
      
        /////////////////////////


        //activate();

        function submit(messageObject)
        {
             messageObject.CreationDate = todaysDateTime;
            messageFactory.postMessage(message)
                          .then(function(data)
                          {
                          // Success read out
                           if(data.cod == 200)
                           {
                             toastr.success("Message Sent!");
                           }

                          },
                          // Error read out
                           function(error)
                           {
                             toastr.error("there was a problem: " + error.statusText);
                           });
        }

    }
})();
