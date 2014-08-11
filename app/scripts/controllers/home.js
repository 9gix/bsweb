'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('HomeCtrl', function ($scope, UserBook, Category) {
    $scope.data = {};
    Category.withOwner().then(function(result){
      $scope.data.categories = result;
    });

    UserBook.latest().then(function(result){
      var books = result.reduce(function(accumulated, current){
        return accumulated.concat(current.book);
      }, []);
      $scope.data.books = books;
    });
  });
