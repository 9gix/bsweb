'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookCtrl
 * @description
 * # MybookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookCtrl', function ($scope, $modal) {

    $scope.openAddBookModal = function(){
      $modal.open({
        templateUrl: 'views/users/book.mine.add.html',
        controller: 'MyBookAddCtrl',
        size: 'lg',
      })
      .result.then(function(books){
        // Update to Server that user added a new Book
        for (var i = 0; i < books.length; i++){
          $scope.books.push(books[i]);
        }
      });
    };

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
