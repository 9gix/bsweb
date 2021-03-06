'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Channel
 * @description
 * # Channel
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Channel', function (Restangular) {
    var Channel = Restangular.service('channels');
    return {
      create: function (loanrequestId) {
        return Channel.post({
          'loan_request': loanrequestId,
        });
      },
      init: function(channelId){
        return Channel.one(channelId).get();
      },
      sendMessage: function(channelId, content){
        return Restangular.service('messages').post({
          channel: channelId,
          content: content,
        });
      },
      updateAppointment: function(channelId, date){
        var channel = Channel.one(channelId);
        channel.appointment_at = date;
        return channel.patch();
      },
    };
  });
