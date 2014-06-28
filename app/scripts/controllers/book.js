'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookCtrl', function ($scope, Book) {
    $scope.books = Book.getList().$object;
  });
