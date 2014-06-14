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
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'accessLevel',
          function($stateProvider, $urlRouterProvider, accessLevel){

      $urlRouterProvider.when('', '/index.html');
      // Anonymous Routes
      $stateProvider
        .state('anon', {
          abstract: true,
          template: '<ui-view/>',
          data: {
            access: accessLevel.anon,
          }
        })
        .state('anon.login', {
          url: '/login',
          templateUrl: 'login',
          controller: 'LoginCtrl',
        });
    $stateProvider
      .state('anon.404', {
        url: '/404/',
        templateUrl: '404',
      });

    $stateProvider
      .state('home', {
          url: '/index.html',
          template: 'hello',
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
  }])
  .run(['$rootScope', '$location', 'User',
       function($rootScope, $location, User){
         $rootScope.$on('$routeChangeStart', function(event, next){
           if (!User.isAuthorized(next.accessLevel)){
            if (User.isLoggedIn()){
              $location.path('/');
            } else {
              $location.path('/login');
            }
           }

         });
  }]);