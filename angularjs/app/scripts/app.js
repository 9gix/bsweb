'use strict';

angular.module('bswebApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ui.router',
  ])
  .config(['$stateProvider', 'ACCESS_LEVELS', '$urlRouterProvider',
          function ($stateProvider, ACCESS_LEVELS, $urlRouterProvider) {

      $urlRouterProvider.when('', '/index.html');
      // Anonymous Routes
      $stateProvider
        .state('anon', {
          abstract: true,
          template: '<ui-view/>',
          data: {
              access: ACCESS_LEVELS.anon,
          }
      })
      .state('anon.login', {
          template: ''
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
              access: ACCESS_LEVELS.user,
          }
      });

    // Admin Routes
    $stateProvider
      .state('admin', {
          abstract: true,
          url: '/admin',
          template: '<ui-view/>',
          data: {
              access: ACCESS_LEVELS.user,
          }
      });
  }]);
