(function() {
    'use strict';

    angular
      .module('app')
      .controller('ProductController', ProductController);

    ProductController.$inject = ['getProductDetails'];

    /* @ngInject */
    function ProductController() {
      var vm = this;
      ProductCtrl 

      ProductCtrl.addProperty = function(propertyInfo) {

        PropertyFactory
          .postProperty(propertyInfo)
          .then(function(response) {
            console.log(response);
            toastr.success("New property added");
            //goSomewhere();
          }, function(error) {
            console.log(error);
          })
      };




    } //end of
  } //end of ProductController
})();
