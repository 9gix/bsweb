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
              ['$scope', '$http', '$location',
                  function ($scope, $http, $location) {
    var searchUrl = 'http://localhost:8000/search/?q=' + $location.search().q;
    $http({method: 'GET', url: searchUrl}).
      success(function(data){
        $scope.books = data;
      });
  }]);
