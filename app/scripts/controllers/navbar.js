'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('NavbarCtrl',
      function NavbarCtrl ($scope, $state, $stateParams, $location,
                           $timeout, Auth, Community) {

    var searchTimeout;

    $scope.community = Community.objects;
    $scope.currentCommunity = Community.current;
    Community.getAll().then(function(communities){
      $scope.community.all= communities;
    });

    $scope.search = function() {
      $state.go('community.search', {q: $scope.query});
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
  });
