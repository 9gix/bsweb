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
  ])
  .config(['$stateProvider',
          '$urlRouterProvider',
          '$httpProvider',
          '$locationProvider',
          'RestangularProvider',
          'accessLevel',
          function bswebAppConfig(
            $stateProvider,
            $urlRouterProvider,
            $httpProvider,
            $locationProvider,
            RestangularProvider,
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
      });

    $stateProvider
      .state('about', {
        url: '/about/',
        templateUrl: 'views/about.html',
      });

    $stateProvider
      .state('login', {
        url: '/login/',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html',
      })
      .state('register', {
        url: '/register/',
        controller: 'RegisterCtrl',
        templateUrl: 'views/register.html',
      });
    $stateProvider
      .state('books', {
        abstract: true,
        url: '/books',
        template: '<ui-view />',
      })
      .state('books.list', {
        url: '/',
        controller: 'BookCtrl',
        templateUrl: 'views/book.list.html',
      })
      .state('books.detail', {
        url: '/:isbn',
        controller: 'BookDetailCtrl',
        templateUrl: 'views/book.detail.html',
      })
      .state('search', {
        url: '/search/?q',
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

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'x-csrftoken';
    $httpProvider.defaults.allowCredentials = 'x-csrftoken';

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
  .run(['$rootScope', '$location', '$http', '$cookies', 'Auth', 'Settings',
       function bswebAppRun($rootScope, $location, $http, $cookies,  Auth, Settings){
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
