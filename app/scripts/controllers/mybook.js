'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookCtrl
 * @description
 * # MybookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookCtrl', function ($scope) {
    // $scope.books = Book.getMine().$object;
    $scope.books = [
      {
        isbn13: '0987654321',
        title: 'My Awesome Book',
        current_holder: 'eugene',
      },
      {
        isbn13: '1234567890',
        title: 'Another Awesome Book',
        current_holder: 'eugene',
      },
    ];
  });
