'use strict';

/**
 * @ngdoc service
 * @name bswebApp.user
 * @description
 * # user
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('User', function (Restangular) {
    var users = Restangular.service('users');

    return {
      get: function(username){
        return users.one(username).get().$object;
      },
    };
  });
