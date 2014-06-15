'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('NavbarCtrl', ['$scope', 'Auth', function NavbarCtrl ($scope, Auth) {
    $scope.site = {
        name: 'BookShare',
        logo: '/logo.png',
        url: 'http://localhost:8080',
    };
    $scope.user = {
        isLogin: Auth.isLogin,
    };
  }]);
