'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Membership
 * @description
 * # Membership
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Membership', function (Restangular, Community, Auth) {
    // TODO dynamically set membership id
    // membership id depends on the login user and the community id
    var current = {
      membership: null,
    };
    return {
      current: current,
      objects: [],
      getId: function () {
        if (current.membership){
          return current.membership.id;
        }
      },
      findByCommunity: function(community){
        if (Auth.isLogin()){
          return Restangular.all('membership').getList({
            username: Auth.getUser().username
          }).then(function(memberships){
            current.membership = memberships.filter(function(membership){
              return membership.user === Auth.getUser().id;
            })[0];
            return memberships;
          });
        } else {
        }
      },
    };
  });
