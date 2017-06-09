(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeFactory', 'SweetAlert', '$state', 'localStorageFactory'];

    function HomeController(HomeFactory, SweetAlert, $state, localStorageFactory) {
        var vm = this;
        // var dob = new Date();

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

        vm.signIn = function(userObject) {
            HomeFactory
                .userLoginSearch(userObject)
                .then(function(returned) {
                    SweetAlert.swal("Great job!");
                    console.log(returned.userId);

                    var setId = returned.userId;
                    localStorageFactory.setLocalStorage('userId', setId);
                    var getId = localStorageFactory.getLocalStorage('userId');
                    console.log(getId);

                    $state.go('profile');

                }, function(error) {
                    alert("Sign In Unsuccessful");
                })//end of signIn function
        }
        
        //  var dob = new Date();
        // var BirthDate = date.toLocaleString();
        // vm.CreationDate = BirthDate;
        // var convertedDateString = dateToConvert.toLocaleString(); 
        // convertedDateString = convertedDateString.replace('at ', ''); 
        // var BirthDate = new Date(convertedDateString);
        //    var BirthDate = date.toLocaleString();
        //    DateTime dob = new DateTime();

       var dob = new Date(Date.UTC());
       var BirthDate = dob.toLocaleString();
        vm.register = function(registrationObject){
            registrationObject.BirthDate = BirthDate; 
            HomeFactory
                .registerUser(registrationObject)
                .then(function(returned){
                 SweetAlert.swal("Registration Complete!");
                //  vm.registraionObject.BirthDate = date.toLocaleString();
                 console.log(returned);   
                }, function(error){
                    alert("Registration Unsuccessful");
                })
        }//end of register function
    };
})();