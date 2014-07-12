'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookCtrl', function ($scope, $stateParams, Book) {
    $scope.page = {
      title: 'Browse Books Category',
    };
    Book.all().getList({categories: $stateParams.categories}).then(function(result){
      $scope.books = result;
    });
  });
