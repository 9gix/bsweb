'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookAddCtrl
 * @description
 * # MyBookAddCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookAddCtrl', function ($scope, $modalInstance) {

    $scope.book = {};

    $scope.add = function(){
      $modalInstance.close($scope.book);
    };

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
  });
