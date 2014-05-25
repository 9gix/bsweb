'use strict';

angular.module('bswebApp')
  .controller('NavbarCtrl', function ($scope) {
      $scope.site = {
          name: 'BookShare',
          logo: '/logo.png',
          url: 'http://localhost:8080',
      }
      $scope.user = {
          isLogin: false,
      };
  });
