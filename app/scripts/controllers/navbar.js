'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('NavbarCtrl', [
      '$scope', '$state', '$location', '$timeout', 'Auth',
      function NavbarCtrl ($scope, $state,  $location, $timeout, Auth) {

    var searchTimeout;

    $scope.search = function() {
      $state.go('search', {q: $scope.query});
      $scope.$apply();
    };

    $scope.$watch('query', function(){
      if (searchTimeout) {
        $timeout.cancel(searchTimeout);
      }
      if ($scope.searchForm.$dirty){
        searchTimeout = $timeout($scope.search, 500);
      }
    });
    $scope.site = {
      name: 'BookShare',
      logo: '/logo.png',
      url: 'http://localhost:8080',
    };

    $scope.user = {
      isLogin: Auth.isLogin,
    };

    $scope.$watch(function(){return Auth.isLogin;}, function(isLogin){
      $scope.user.isLogin = isLogin;
    }, true);

    $scope.login = function(){
      Auth.login({username: $scope.username, password: $scope.password},
        function(){
          $scope.user.isLogin = true;
        },
        function(){
          $scope.user.isLogin = false;
        });
    };

    $scope.logout = function(){
        Auth.logout(function(){
          $scope.user.isLogin = false;
        });
    };
  }]);
