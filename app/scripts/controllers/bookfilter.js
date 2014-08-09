'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookfilterCtrl
 * @description
 * # BookfilterCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookFilterCtrl', function ($scope, $state, Category) {
    Category.withOwner().then(function(result){
      $scope.categories = result;
    });

    $scope.currentState = $state.current.name
  });
