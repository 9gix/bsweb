'use strict';

angular.module('bswebApp')
  .controller('SearchCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
	var search_url = 'http://localhost:8000/search/?q=' + $location.search()['q'];
    $http({method: 'GET', url: search_url}).
	  success(function(data, status, headers, config){
		$scope.books = data;
	  });
  }]);
