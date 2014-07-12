'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('SearchCtrl',
              ['$scope', '$location', 'Book',
                  function ($scope, $location, Book) {
    $scope.page = {
      title: 'Search Result',
    };
    $scope.books = Book.search($location.search().q).$object;
  }]);
