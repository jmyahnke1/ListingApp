(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeFactory', 'SweetAlert', '$state'];

    function HomeController(HomeFactory, SweetAlert, $state) {
        var vm = this;
        //vm.loginButton = loginButton;
        vm.links = [{
            'display': 'Welcome User!',
            'state': 'login'
        }, {
            'display': 'Product Feed',
            'state': 'productfeed'
        }, ];

        vm.status = {
            isopen: false
        };

        ///////////////////////////////////////////////////////

        vm.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        vm.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.status.isopen = !vm.status.isopen;
        };


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