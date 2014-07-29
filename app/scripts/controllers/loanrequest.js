'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoanrequestCtrl
 * @description
 * # LoanrequestCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoanRequestCtrl', function ($scope, Reservation, Channel, alerts) {
    Reservation.all().then(function(result){
      $scope.loanrequests = result;
    });
  });
