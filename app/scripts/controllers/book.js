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
    $scope.page = {
      title: 'Browse Books',
    };
    $scope.books = Book.all();
  });
