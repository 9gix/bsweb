'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Auth
 * @description
 * # Auth
 * Service in the bswebApp.
 */
angular.module('bswebApp')
  .service('Auth', ['$http', 'Settings', function Auth($http, Settings) {
    var currentUser = null;
    var userToken = localStorage.getItem('userToken');
    var isLogin = userToken ? true : false;

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

    return {

      login: function(credential, success, error){
        var req = $http.post(Settings.bsapi.tokenAuthEndpoint, credential);
        req.success(function(result){
          setToken(result.token);
          isLogin = true;
          success();
        }).error(error);
      },

      logout: function(success){
        setToken(null);
        isLogin = false;
        success();
      },

      userToken: userToken,
      isLogin: isLogin,
    };
  }]);
