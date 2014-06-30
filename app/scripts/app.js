'use strict';

/**
 * @ngdoc overview
 * @name bswebApp
 * @description
 * # bswebApp
 *
 * Main module of the application.
 */
angular
  .module('bswebApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'truncate',
    'restangular',
    'ngStorage',
  ])
  .config(['$httpProvider',
          '$locationProvider',
          'RestangularProvider',
          function bswebAppConfig(
            $httpProvider,
            $locationProvider,
            RestangularProvider){

    var access = routingConfig.accessLevels;

    // $locationProvider.html5Mode(true);

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'x-csrftoken';
    $httpProvider.defaults.allowCredentials = 'x-csrftoken';

    RestangularProvider.setRequestSuffix('/');

    RestangularProvider.addResponseInterceptor(
      function(data, operation, what, url, response, deferred) {
        var extractedData;
        if (operation === "getList") {
          extractedData = data.results;
          extractedData.count = data.count;
          extractedData.previous = data.previous;
          extractedData.next = data.next;
        } else {
          extractedData = data;
        }
        return extractedData;
    });
    RestangularProvider.setBaseUrl('http://localhost:8000/');
  }])
  .run(function ($rootScope, $cookies, $state, Auth, Settings){
         $rootScope.$on('$stateChangeStart', function (
             event, toState, toParams, fromState, fromParams){

         if (toState.data && !Auth.isAuthorized(toState.data.accessLevel)){
           event.preventDefault();
           $state.go('home');
         }
       });
  });
