'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookDetailCtrl', function ($scope, $stateParams, $http) {
    var detailUrl = 'http://localhost:8000/books-profile/' + $stateParams.isbn + '/';
    $http({method: 'GET', url: detailUrl}).
      success(function(data){
        $scope.book = data;
      });
  });
