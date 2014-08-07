angular.module('bswebApp').config(function($stateProvider, $urlRouterProvider){

    var access = routingConfig.accessLevels;

    $urlRouterProvider.otherwise('/world/index.html');

    $stateProvider
      .state('404', {
        url: '/404/',
        templateUrl: '404',
      });

    $stateProvider
    .state('community', {
      abstract: true,
      controller: 'CommunityCtrl',
      url: '/:slug',
      template: '<ui-view />',
      resolve: {
        slug: ['$stateParams', function($stateParams){
          return $stateParams.slug;
        }]
      },
    });
    $stateProvider
      .state('community.home', {
        url: '/index.html',
        controller: 'HomeCtrl',
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
      .state('community.books', {
        abstract: true,
        url: '/books',
        template: '<ui-view />',
      })
      .state('community.books.list', {
        url: '/?categories',
        controller: 'BookCtrl',
        templateUrl: 'views/book.list.html',
      })
      .state('community.books.detail', {
        url: '/:isbn',
        controller: 'BookDetailCtrl',
        templateUrl: 'views/book.detail.html',
      })
      .state('community.search', {
        url: '/search/?q&categories',
        templateUrl: 'views/book.list.html',
        controller: 'SearchCtrl',
      });
      
    // User Routes
    $stateProvider
      .state('community.user', {
          abstract: true,
          templateUrl: 'views/users/base.html',
          url: '/manage',
          data: {
            accessLevel: access.user,
          },
      })

      .state('community.user.summary', {
        url: '/summary',
        templateUrl: 'views/users/summary.html',
      })

      .state('community.user.loanrequest', {
        url: '/loan-request',
        controller: 'LoanRequestCtrl',
        templateUrl: 'views/users/loanrequest.html',
      })

      .state('community.user.channel', {
        url: '/channel/:channelId',
        controller: 'ChannelCtrl',
        templateUrl: 'views/users/channel.html',
      })

      .state('community.user.reputation', {
        url: '/reputation',
        templateUrl: 'views/users/reputation.html',
      })
      .state('community.user.profile', {
        url: '/profile',
        templateUrl: 'views/users/profile.html',
      })
      .state('community.user.settings', {
        url: '/settings',
        templateUrl: 'views/users/settings.html',
      })

      // User Book Routes
      .state('community.user.book', {
        controller: 'UserBookCtrl',
        url: '/book',
        templateUrl: 'views/users/book.html',
      })
      .state('community.user.book.mine', {
        url: '/mine',
        controller: 'MyBookCtrl',
        templateUrl: 'views/users/book.mine.html',
      })
      .state('community.user.book.theirs', {
        url: '/borrowed',
        templateUrl: 'views/users/book.theirs.html',
      });

    // Admin Routes
    $stateProvider
      .state('community.admin', {
          abstract: true,
          url: '/admin',
          template: '<ui-view/>',
          data: {
            accessLevel: access.admin,
          },
      });
  });

