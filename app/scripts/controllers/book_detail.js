'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookDetailCtrl', function ($scope, $stateParams, Book) {
    $scope.book = Book.one($stateParams.isbn).get().$object;
  });
