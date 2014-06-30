angular.module('bswebApp').config(function($stateProvider, $urlRouterProvider){

    var access = routingConfig.accessLevels;

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
      .state('anon', {
        abstract: true,
        template: '<ui-view />',
        data: {
          accessLevel: access.anon,
        },
      })
      .state('anon.login', {
        url: '/login/',
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html',
      })
      .state('anon.register', {
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
          templateUrl: 'views/users/base.html',
          url: '/manage',
          data: {
            accessLevel: access.user,
          },
      })

      .state('user.summary', {
        url: '/summary',
        templateUrl: 'views/users/summary.html',
      })

      .state('user.conversation', {
        url: '/messages',
        templateUrl: 'views/users/conversation.html',
      })
      .state('user.reputation', {
        url: '/reputation',
        templateUrl: 'views/users/reputation.html',
      })
      .state('user.profile', {
        url: '/profile',
        templateUrl: 'views/users/profile.html',
      })
      .state('user.settings', {
        url: '/settings',
        templateUrl: 'views/users/settings.html',
      })

      // User Book Routes
      .state('user.book', {
        controller: 'UserBookCtrl',
        url: '/book',
        templateUrl: 'views/users/book.html',
      })
      .state('user.book.mine', {
        url: '/mine',
        controller: 'MyBookCtrl',
        templateUrl: 'views/users/book.mine.html',
      })
      .state('user.book.theirs', {
        url: '/borrowed',
        templateUrl: 'views/users/book.theirs.html',
      });

    // Admin Routes
    $stateProvider
      .state('admin', {
          abstract: true,
          url: '/admin',
          template: '<ui-view/>',
          data: {
            accessLevel: access.admin,
          },
      });
  });
