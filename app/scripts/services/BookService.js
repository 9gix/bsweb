'use strict';

angular.module('bswebApp')
  .service('Book', ['$resource', function ($resource) {
    return $resource('http://localhost:8000/api/v1/:bookGenericId', {}, {
        query: {method: 'GET', params: {bookGenericId: 'books-generic'}, isArray: true}
      });
  }]);
