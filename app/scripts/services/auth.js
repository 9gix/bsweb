'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Auth
 * @description
 * # Auth
 * Service in the bswebApp.
 */
angular.module('bswebApp')
  .service('Auth', ['$http', 'BSAPI', function Auth($http, BSAPI) {
    var currentUser = null;
    return {

      login: function(user, success, error){
        // Popup an Authorization

        var formatPopupOptions = function(options) {
          var pairs = [];
          angular.forEach(options, function(value, key) {
            if (value || value === 0) {
              value = value === true ? 'yes' : value;
              pairs.push(key + '=' + value);
            }
          });
          return pairs.join(',');
        };

        var objectToQueryString = function(obj) {
              var str = [];
              angular.forEach(obj, function(value, key) {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
              });
              return str.join('&');
            };

        var getParams = function(){
          return {
            'response_type': 'token',
            'client_id': BSAPI.clientId,
            'redirect_uri': BSAPI.redirectUri,
          };
        };

        var url = BSAPI.authorizationEndpoint + '?' + objectToQueryString(getParams());

        var popup = window.open(
          url, 'BSAPI Authorization',
          formatPopupOptions({
            width: 650,
            height: 300,
            resizable: true,
            scrollbars: true,
            status: true
          }
        ));
      },

      logout: function(success, error){
        $http.post(BSAPI.url + '/logout').success(function(){
          currentUser = null;
          success();
        }).error(error);
      },

      user: currentUser,
    };
  }]);
