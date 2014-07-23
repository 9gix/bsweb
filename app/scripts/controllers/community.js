'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:CommunityCtrl
 * @description
 * # CommunityCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('CommunityCtrl', function ($scope, $stateParams, Community) {
    Community.get($stateParams.slug)
    .then(function(community){
      Community.current.community = community;
    });
  });
