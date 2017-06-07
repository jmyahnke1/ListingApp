(function() {
  'use strict';

  angular
    .module('app')
    .factory('ProductFactory', ProductFactory);

  ProductFactory.$inject = ['$http', 'localApi'];

  /* @ngInject */
  function ProductFactory($http, localApi) {
    var service = {
      getProductDetails: getProductDetails,
      postProducts: postProducts
    };

    return service;

    function getProductDetails(details) {
      return $http({
        method: 'GET',
        url: localApi + '/Products/',
        params: details,
      }).then(function(returned) {
        return returned;
      }, function(error) {
        console.log("Error" + error);
        return error;
      });
    } //end of getProductDetails

    function postProducts(products) {
      console.log(products);
      return $http({
        method: 'POST',
        url: localApi + '/products',
        dataType: "json",
        data: products,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).then(function(info) {
        return info;
      }, function(error) {
        return error;
      })
    } //end of postProducts


  } //end of ProductFactory
})();
