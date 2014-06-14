'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoginCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.login = function(){
      User.setCurrentUser('user');
    };
  }]);
