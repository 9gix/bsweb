'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Category
 * @description
 * # Category
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Category', function (Restangular) {
    var categories = Restangular.service('categories');
    return {
      all: function(){
        return categories.getList();
      },
    };
  });
