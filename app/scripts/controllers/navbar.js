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
    };

    $scope.auth = Auth;

    $scope.login = function(){
      Auth.login({username: $scope.username, password: $scope.password});
    };

    $scope.logout = function(){
        Auth.logout();
    };
  }]);
