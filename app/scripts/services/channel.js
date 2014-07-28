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
      messages: function(channelId){
        return Channel.one(channelId).get();
      },
    };
  });
