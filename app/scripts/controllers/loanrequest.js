'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoanrequestCtrl
 * @description
 * # LoanrequestCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoanRequestCtrl', function ($scope, Reservation) {
    Reservation.all().then(function(result){
      $scope.loanrequests = result;
    });

    $scope.approve = function(loanrequestId){
      // TODO approve, create channel and redirect user to the channel
    };
    $scope.reject = function(loanrequestId){

    };
  });
