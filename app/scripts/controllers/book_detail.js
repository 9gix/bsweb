'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookDetailCtrl', function ($scope, $modal, $stateParams, Book, UserBook) {
    $scope.book = Book.get($stateParams.isbn);
    UserBook.getList({isbn: $stateParams.isbn}).then(function(result){
      $scope.usersBook = result;
    });

    $scope.borrowDialog = function(){
      var borrowInstance = $modal.open({
        templateUrl: 'views/borrowModal.html',
        controller: 'BorrowDialogModalCtrl',
        size: 's',
        resolve: {
          userBook: $scope.userBook,
        }
      });
      borrowInstance.result.then(function(result){
      });
    };

  });
