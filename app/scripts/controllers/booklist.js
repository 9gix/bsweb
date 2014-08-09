'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BooklistCtrl
 * @description
 * # BooklistCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookListCtrl', function ($scope, $state, $document, $stateParams, Book) {
    $scope.data = {
      books: [],
    };
  });
