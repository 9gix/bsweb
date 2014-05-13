'use strict';

angular.module('bookshareApp')
  .controller('MainCtrl', ['$scope', 'Book', function ($scope, Book) {
    $scope.books = Book.query();
  }]);
