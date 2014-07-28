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
    $scope.channelId = $stateParams.channelId;
    Channel.messages($scope.channelId).then(function(result){
      $scope.messages = result.message_set;
    });

    $scope.sendMessage = function(){
      Channel.sendMessage(
        $scope.channelId, $scope.content
      ).then(function(result){
        $scope.messages.push(result);
        alerts.push({
          type: 'success',
          msg: 'Message Sent!!!',
        });
        $scope.content = '';
        $document.scrollTop(0, 500);
      });
    };
  });
