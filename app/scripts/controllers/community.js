'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:CommunityCtrl
 * @description
 * # CommunityCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('CommunityCtrl',
              function ($scope, $stateParams, Auth, Community, Membership) {
    $scope.$watch(function(){
      return Auth.isLogin();
    }, function(val){
      Community.get($stateParams.slug)
      .then(function(community){
        Community.current.community = community;
        return Membership.findByCommunity(community);
      }).then(function(memberships){
        for (var i = 0; i < memberships.length; i++){
          Membership.objects.push(memberships[i]);
        }
      });

    });
  });
