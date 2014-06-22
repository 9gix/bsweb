'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoginCtrl', ['$scope', '$window', 'Auth',
              function LoginCtrl($scope, $window, Auth) {

    $scope.isSignedIn = false;
    $scope.token = null;

    $scope.login = function(){
      Auth.login({
        username: $scope.username,
        password: $scope.password,
        remember: $scope.remember,
      }, function(result){
        $scope.isSignedIn = true;
      }, function(error){
        console.log('Error: ' + error);
      });
    };

    $scope.signInBsAuth = function(){
      $window.open(Settings.bsapi.authorizationEndpoint);
    };

    $scope.processAuth = function(authResult){
      if (authResult.access_token){
        $scope.isSignedIn = true;
      }
    };
  }]);
