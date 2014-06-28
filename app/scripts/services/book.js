'use strict';

/**
 * @ngdoc service
 * @name bswebApp.Book
 * @description
 * # Book
 * Service in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Book', function Book(Restangular) {
    return Restangular.service('books');
  });
