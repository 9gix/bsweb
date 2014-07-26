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
                        $document, Book, UserBook, Reservation, alerts) {
    $scope.book = Book.get($stateParams.isbn);
    UserBook.getList({isbn: $stateParams.isbn}).then(function(result){
      $scope.usersBook = result;
    });

    $scope.requestBook = function(userbookId){
      Reservation.makeRequest(userbookId).then(function(result){
        alerts.push({type: 'success', msg: 'Book Request Sent!!'});
      }, function(error){
        alerts.push({type: 'danger', msg: 'Book Request Unsuccessful!!'});
      });
      $document.scrollTop(0,300);
    };
  });
