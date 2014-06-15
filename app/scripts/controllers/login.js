'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoginCtrl', ['$scope', 'Auth', function LoginCtrl($scope, Auth) {
    $scope.login = function login(){
      Auth.login({
        user: $scope.username,
        password: $scope.password,
      });
    };
  }]);
