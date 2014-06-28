'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Auth
 * @description
 * # Auth
 * Service in the bswebApp.
 */
angular.module('bswebApp')
  .service('Auth', ['$http', 'Restangular', 'Settings', 'User',
           function Auth($http, Restangular, Settings, User) {

    var accessLevel = routingConfig.accessLevel,
        userRoles = routingConfig.userRoles,
        currentUser = sessionStorage.getItem('user') ||
                      { username: '', role: userRoles.public };

    var setUser = function(user){
      sessionStorage.setItem('user', user);
      currentUser = user;
    };

    var clearUser = function(){
      sessionStorage.removeItem('user');
      currentUser = { username: '', role: userRoles.public };
    };

    var setTokenHeader = function(token){
      if (!token){
        delete $http.defaults.headers.common.Authorization;
        return;
      }
      $http.defaults.headers.common.Authorization = 'Token ' +  token;
    };

    var setToken = function(token){
      if (!token){
        localStorage.removeItem('userToken');
      } else {
        localStorage.setItem('userToken', token);
      }
      setTokenHeader(token);
    };

    var getUserToken = function(){
      return localStorage.getItem('userToken');
    };

    return {
      isAuthorized: function(accessLevel){
        // TODO: handle undefined user
        return accessLevel.bitMask & currentUser.role.bitMask;
      },

      login: function(credential){
        Restangular.oneUrl('token-auth', Settings.bsapi.tokenAuthEndpoint)
          .post('', credential)
          .then(function(result){
            setToken(result.token);
            setUser({username: credential.username, role: userRoles.user});

            // TODO: investiage trailing slash issues
            // return User.get(credential.username);

          });
        ;
      },

      logout: function(){
        setToken(null);
        clearUser();
      },

      isLogin: function(){
        return getUserToken() ? true : false;
      },
    };
  }]);
