'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookDetailCtrl', function ($scope, $stateParams, Book, UserBook) {
    $scope.book = Book.get($stateParams.isbn);
    UserBook.getList({isbn: $stateParams.isbn}).then(function(result){
      $scope.usersBook = result;
    });
  });
