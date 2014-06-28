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

      login: function(credential){
        var req = $http.post(Settings.bsapi.tokenAuthEndpoint, credential);
        req.success(function(result){
          setToken(result.token);
        });
      },

      logout: function(){
        setToken(null);
      },

      isLogin: function(){
        return getUserToken() ? true : false;
      },
    };
  }]);
