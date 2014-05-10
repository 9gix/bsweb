'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.books = [
      {'isbn': '987444432234', 'title': 'Awesome Demo'},
      {'isbn': '987888765218', 'title': 'Rock the Party'},
    ];
  });
