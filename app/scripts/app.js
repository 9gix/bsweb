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
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'accessLevel',
          function($stateProvider, $urlRouterProvider, $locationProvider, accessLevel){

    $urlRouterProvider.otherwise('/index.html');
    // Anonymous Routes
    $stateProvider
      .state('login', {
        url: '/login',
        onEnter: function($modal){
          $modal.open({
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
          });
        },
      });
    $stateProvider
      .state('404', {
        url: '/404/',
        templateUrl: '404',
      });

    $stateProvider
      .state('home', {
          url: '/index.html',
          templateUrl: 'views/main.html',
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
