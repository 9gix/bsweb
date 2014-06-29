'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookAddCtrl
 * @description
 * # MyBookAddCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookAddCtrl', function ($scope, $modalInstance, Book) {
    $scope.providerForm = {
      query: '',
    };
    $scope.searchResult = {
      books: [],
    };

    $scope.providerSearch = function(){
      $scope.searchResult.books = Book.providerSearch($scope.providerForm.query).$object;
    };

    $scope.add = function(){
      var selectedBooks = $scope.searchResult.books.filter(function(book){
        return book.isSelected;
      });
      $modalInstance.close(selectedBooks);
    };

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };
  });
