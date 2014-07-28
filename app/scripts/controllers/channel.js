'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:ChannelCtrl
 * @description
 * # ChannelCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('ChannelCtrl', function ($scope, $stateParams, $document, Channel, alerts) {
    $scope.channel = {
      id: $stateParams.channelId,
    };
    Channel.init($scope.channel.id).then(function(result){
      $scope.channel.messages = result.message_set;
      $scope.channel.appointment = new Date(result.appointment_at);
    });

    $scope.sendMessage = function(){
      Channel.sendMessage(
        $scope.channel.id, $scope.channel.content
      ).then(function(result){
        $scope.channel.messages.push(result);
        alerts.push({
          type: 'success',
          msg: 'Message Sent!!!',
        });
        $scope.content = '';
        $document.scrollTop(0, 500);
      });
    };

    $scope.updateAppointment = function(){
      Channel.updateAppointment($scope.channel.id, $scope.channel.appointment).then(function(result){
        alerts.push({type:'success', msg: 'Appointment Updated!'});
      });
    };

  });
