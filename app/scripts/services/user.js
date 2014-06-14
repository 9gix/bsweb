'use strict';

/**
 * @ngdoc service
 * @name bswebApp.User
 * @description
 * # User
 * Service in the bswebApp.
 */
angular.module('bswebApp')
  .service('User', function User() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var currentUser = null;

    return {
      setCurrentUser: function(user){
        currentUser = user;
      },
      isLoggedIn: function(){
        return currentUser !== null;
      },
    };
  });
