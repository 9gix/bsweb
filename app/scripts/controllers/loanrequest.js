'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoanrequestCtrl
 * @description
 * # LoanrequestCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoanRequestCtrl', function ($scope, Reservation, alerts) {
    Reservation.all().then(function(result){
      $scope.loanrequests = result;
    });

    $scope.approve = function(loanrequestId){
      // TODO create channel and redirect user to the channel
      Reservation.approve(loanrequestId).then(function(result){
        alerts.push({type: 'success', msg: result.status});
      }, function(error){
        alerts.push({type: 'warning', msg: error.data.errors});
      });
    };
    $scope.reject = function(loanrequestId){
      // TODO approve, create channel and redirect user to the channel
      Reservation.reject(loanrequestId).then(function(result){
        alerts.push({type: 'success', msg: result.status});
      }, function(error){
        alerts.push({type: 'warning', msg: error.data.errors});
      });
    };
  });
