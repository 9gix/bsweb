'use strict';

/**
 * @ngdoc service
 * @name bswebApp.accessLevel
 * @description
 * # accessLevel
 * Constant in the bswebApp.
 */
angular.module('bswebApp')
  .constant('accessLevel', {
      anon: 1,
      user: 2,
      admin: 3,
  });
