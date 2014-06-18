'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookCtrl', function ($scope, $location, $http) {
    var searchUrl = 'http://localhost:8000/books-profile/';
    $http({method: 'GET', url: searchUrl}).
      success(function(data){
        $scope.books = data;
      });
  });
