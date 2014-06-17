'use strict';

/**
 * @ngdoc directive
 * @name bswebApp.directive:bsBookItem
 * @description
 * # bsBookItem
 */
angular.module('bswebApp')
  .directive('bsBookItem', function () {
    return {
      templateUrl: 'views/book_item.html',
      restrict: 'E',
    };
  });
