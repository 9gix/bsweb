'use strict';

/**
 * @ngdoc service
 * @name bswebApp.userBook
 * @description
 * # userBook
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('UserBook', function (Restangular) {
    var MyBook = Restangular.service('user-books');

    return {
      add: function (isbn) {
        return MyBook.post(isbn);
      },
      remove: function(userBookId){
        return MyBook.one(userBookId).remove();
      },
      getList: function(){
        return MyBook.getList();
      },
    };
  })
  .factory('MyBook', function (Restangular) {
    var MyBook = Restangular.service('my-books');

    return {
      add: function (isbn) {
        return MyBook.post({
          'isbn': isbn,
        });
      },
      remove: function(userBookId){
        return MyBook.one(userBookId).remove();
      },
      getList: function(){
        return MyBook.getList();
      },
    };
  });
