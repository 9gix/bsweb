'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookDetailCtrl',
              function ($scope, $modal, $stateParams,
                        $document, Book, UserBook, alerts) {
    $scope.book = Book.get($stateParams.isbn);
    UserBook.getList({isbn: $stateParams.isbn}).then(function(result){
      $scope.usersBook = result;
    });

    $scope.requestBook = function(){
      alerts.push({type: 'success', msg: 'Book Request Sent!!'});
      $document.scrollTop(0,300);
    };
  });
