'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:ChannelCtrl
 * @description
 * # ChannelCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('ChannelCtrl', function ($scope, $stateParams, Channel) {
    $scope.channelId = $stateParams.channelId;
    Channel.messages($scope.channelId).then(function(result){
      $scope.messages = result.message_set;
    });
  });
