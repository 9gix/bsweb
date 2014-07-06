'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:MyBookCtrl
 * @description
 * # MybookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('MyBookCtrl', function ($scope, $modal, MyBook) {

    $scope.myBooks = MyBook.getList().$object;

    $scope.remove = function(myBook){
      MyBook.remove(myBook.id).then(function(id){
        $scope.myBooks.splice($scope.myBooks.indexOf(myBook), 1);
      });
    };

    $scope.openAddBookModal = function(){
      $modal.open({
        templateUrl: 'views/users/book.mine.add.html',
        controller: 'MyBookAddCtrl',
        size: 'lg',
        resolve: {
          myBooks: function(){
            return $scope.myBooks;
          },
        },
      });
    };
  });
