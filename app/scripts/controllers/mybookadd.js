'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookAddCtrl
 * @description
 * # MyBookAddCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookAddCtrl', function ($scope, MyBook, Book, myBooks) {

    $scope.$watch(
      function(){
        return myBooks;
      },
      function(books){
        $scope.myBookIsbn = books.map(function(myBook){
          return myBook.book.isbn;
        });
      }
    );

    $scope.providerForm = {
      query: '',
    };
    $scope.searchResult = {
      books: [],
    };

    $scope.providerSearch = function(){
      $scope.searchResult.books = Book.providerSearch($scope.providerForm.query).$object;
    };

    $scope.add = function(book){
      MyBook.add(book.isbn).then(function(myBook){
        myBooks.push(myBook);
      });
    };

    $scope.isOwned = function(book){
      return $scope.myBookIsbn.indexOf(book.isbn) !== -1;
    };

    $scope.done = function(){
      $scope.$dismiss('Done');
    };
  });
