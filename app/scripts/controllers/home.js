'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('HomeCtrl', function ($scope, Category) {
    Category.withOwner().then(function(result){
      $scope.categories = result;
    });
  });
