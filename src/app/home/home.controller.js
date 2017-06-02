(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['SweetAlert', '$state'];

    function HomeController(SweetAlert, $state) {
        var vm = this;
        //vm.loginButton = loginButton;

        ////////////////

        //     function loginButton() {
        //         swal({
        //             title: "BEHOLD THE TEXT BOX OF DEATH!",
        //             text: 'An incorrect answer means beheading:',
        //             type: 'input',
        //             showCancelButton: true,
        //             closeOnConfirm: true,
        //             animation: "slide-from-top"
        //         }, function(inputValue) {
        //             console.log("You wrote", inputValue);
        //         });
        //     };
        // }









    };
})();