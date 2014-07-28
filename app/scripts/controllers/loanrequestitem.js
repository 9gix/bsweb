'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoanrequestitemCtrl
 * @description
 * # LoanrequestitemCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoanRequestItemCtrl', function ($scope, Reservation, Channel, alerts) {

    $scope.approve = function(){
      // TODO redirect user to the channel
      Reservation.approve($scope.loanrequest.id).then(function(result){
        alerts.push({type: 'success', msg: result.status_display});
        $scope.loanrequest.status = result.status;
        return Channel.create($scope.loanrequest.id);
      }, function(error){
        alerts.push({type: 'warning', msg: error.data.errors});
      }).then(function(channel){
        console.log(channel);
      });
    };
    $scope.reject = function(){
      // TODO redirect user to the channel
      Reservation.reject($scope.loanrequest.id).then(function(result){
        $scope.loanrequest.status = result.status;
        alerts.push({type: 'success', msg: result.status_display});
      }, function(error){
        alerts.push({type: 'warning', msg: error.data.errors});
      });
    };
  });
