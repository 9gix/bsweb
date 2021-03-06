'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Auth
 * @description
 * # Auth
 * Service in the bswebApp.
 */
angular.module('bswebApp')
  .service('Auth',
           function Auth($http, $sessionStorage,
                         Restangular, Settings, User) {

    var accessLevel = routingConfig.accessLevel,
        userRoles = routingConfig.userRoles;

    $sessionStorage.$default({
      user: { username: '', role: userRoles.public },
      token: null,
    });

    var currentUser = $sessionStorage.user;

    var setUser = function(user){
      $sessionStorage.user = user;
      currentUser = user;
    };

    var getUser = function(){
      return currentUser;
    };

    var clearUser = function(){
      delete $sessionStorage.user;
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
        delete $sessionStorage.userToken;
      } else {
        $sessionStorage.userToken = token;
      }
      setTokenHeader(token);
    };

    var getUserToken = function(){
      return $sessionStorage.userToken;
    };

    setToken(getUserToken());

    return {
      isAuthorized: function(accessLevel){
        return accessLevel.bitMask & currentUser.role.bitMask;
      },

      getUser: getUser,

      login: function(credential){
        Restangular
          .oneUrl('token-auth', Settings.bsapi.tokenAuthEndpoint)
          .post('', credential)
          .then(function(result){
            setToken(result.token);
            return User.get(credential.username);
          })
          .then(function(result){
            var user = Restangular.copy(result);
            user.role = userRoles.user;
            setUser(user);
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
  });
