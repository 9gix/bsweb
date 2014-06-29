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

    $scope.books = {};
    $scope.searchResult = {
      books: [
        {isbn13: '123', selected: 1},
        {isbn13: '321', selected: 0},
        {isbn13: '444', selected: -1},
      ],

    };

    $scope.add = function(){
      $modalInstance.close($scope.book);
    };

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
  });
