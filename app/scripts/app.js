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
  ])
  .config(['$stateProvider',
          '$urlRouterProvider',
          '$locationProvider',
          'accessLevel',
          function bswebAppConfig(
            $stateProvider,
            $urlRouterProvider,
            $locationProvider,
            accessLevel){

    $urlRouterProvider.otherwise('/index.html');

    $stateProvider
      .state('404', {
        url: '/404/',
        templateUrl: '404',
      });

    $stateProvider
      .state('home', {
        url: '/index.html',
        templateUrl: 'views/main.html',
      })
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
      });

    // User Routes
    $stateProvider
      .state('user', {
          abstract: true,
          template: '<ui-view/>',
          url: '/manage',
          data: {
              access: accessLevel.user,
          }
      });

    // Admin Routes
    $stateProvider
      .state('admin', {
          abstract: true,
          url: '/admin',
          template: '<ui-view/>',
          data: {
              access: accessLevel.user,
          }
      });

    // $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', '$location', 'Auth',
       function bswebAppRun($rootScope, $location, Auth){
         $rootScope.$on('$routeChangeStart', function routeChangeStartEvent(event, next){
           if (!Auth.isAuthorized(next.accessLevel)){
            if (Auth.isLoggedIn()){
              $location.path('/');
            } else {
              $location.path('/login');
            }
           }

         });
  }]);
