'use strict';

angular.module('bswebApp')
  .service('Book', ['$resource', function ($resource) {
    return $resource('http://localhost:8000/api/v1/:bookProfileId', {}, {
        query: {method: 'GET', params: {bookProfileId: 'books-profile'}, isArray: true}
      });
  }]);
