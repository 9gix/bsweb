'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:LoanrequestitemCtrl
 * @description
 * # LoanrequestitemCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('LoanRequestItemCtrl', function ($scope, $q, Reservation, Channel, alerts) {

    $scope.approve = function(){
      // TODO redirect user to the channel
      Reservation.approve($scope.loanrequest.id).then(function(loanrequest){
        alerts.push({type: 'success', msg: loanrequest.status_display});
        $scope.loanrequest.status = loanrequest.status;
        if (!$scope.loanrequest.channel){
          return Channel.create($scope.loanrequest.id);
        } else {
          return $q.reject('channel already created');
        }
      }, function(error){
        alerts.push({type: 'warning', msg: error.data.errors});
      }).then(function(channel){
        $scope.loanrequest.channel = channel.id;
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

    $scope.isMyBook = function(){
      return $scope.loanrequest.is_my_book;
    };
  });
