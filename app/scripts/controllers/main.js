'use strict';

angular.module('bswebApp')
  .controller('MainCtrl', ['$scope', 'Book', function ($scope, Book) {
    $scope.books = Book.query();
  }]);
