'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookAddCtrl
 * @description
 * # MyBookAddCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookAddCtrl', function ($scope, $q, MyBook, Book, myBooks) {

    $scope.searchInProgress = false;

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

    $scope.searchForm = {
      query: '',
    };
    $scope.searchResult = {
      books: [],
    };

    $scope.providerSearch = function(){
      $scope.searchInProgress = true;
      Book.search($scope.searchForm.query).then(function(books){
        $scope.searchResult.books = books;
        return Book.providerSearch($scope.searchForm.query);
      }, function(error){
        $scope.searchInProgress = false;
        $q.reject();
      }).then(function(books){
        $scope.searchResult.books = books.concat($scope.searchResult.books);
        $scope.searchInProgress = false;
      }, function(error){
        $scope.searchInProgress = false;
        $q.reject();
      });
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
