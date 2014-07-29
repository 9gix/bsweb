'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Community
 * @description
 * # Community
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Community', function ($q, Restangular) {
    var current = {
      community: null,
    };
    return {
      current: current,
      objects: [],
      get: function(slug){
        return Restangular.one('communities', slug).get()
        .then(function(community){
          return community;
        });
      },
      getAll: function () {
        var self = this;
        if (this.objects.length){
          return $q.when(this.objects);
        }
        return Restangular.all('communities').getList()
        .then(function(communities){
          self.objects = _.map(communities, function(community){
            return community;
          });
          return self.objects;
        });
      }
    };
  });
