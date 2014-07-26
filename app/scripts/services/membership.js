'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Membership
 * @description
 * # Membership
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Membership', function (Community, Auth) {
    // TODO dynamically set membership id
    // membership id depends on the login user and the community id
    var membershipId = 1;
    return {
      getId: function () {
        return membershipId;
      }
    };
  });
