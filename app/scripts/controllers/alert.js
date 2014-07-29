'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:AlertCtrl
 * @description
 * # AlertCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('AlertCtrl', function ($scope, $timeout, alerts) {
    $scope.alerts = alerts;

    $scope.$on('$stateChangeStart', function(){
      alerts.length = 0;
    });

    $scope.closeAlert = function(index){
      alerts.splice(index, 1);
    };
  });
