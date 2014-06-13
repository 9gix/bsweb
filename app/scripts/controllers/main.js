'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MainCtrl', ['$scope', 'Book', function ($scope, Book) {
    $scope.books = Book.query();
  }]);
