'use strict';

/**
 * @ngdoc directive
 * @name bswebApp.directive:holderFix
 * @description
 * # holderFix
 */
angular.module('bswebApp')
  .directive('holderFix', function () {
    return {
      link: function (scope, element, attrs) {
          Holder.run({ images: element[0], nocss: true });
      }
    };
  });
