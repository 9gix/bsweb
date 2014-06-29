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
    var books = Restangular.service('books');
    return {
      providerSearch: function(query){
        return Restangular.all('search').customGETLIST('provider', {q: query});
      },
      search: function(query){
        return Restangular.all('search').getList({q: query});
      },
      all: function(){
        return books.getList().$object;
      },
      get: function(isbn){
        return books.one(isbn).get().$object;
      },
    };
  });
