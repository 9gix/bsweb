'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookBrowseCtrl
 * @description
 * # BookBrowseCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookBrowseCtrl', function ($scope, $document, $stateParams,
                                    Book, Category) {

    $scope.page = {
      title: 'Browse Books Category',
    };

    $scope.paginator = {
      totalItems: 0,
      currentPage: 1,
      itemPerPage: 20,
      maxSize: 10,
      pageChanged: function(){
        Book.all().getList({
          categories: $stateParams.categories,
          page: $scope.paginator.currentPage,
          with_owner: 'True',
        }).then(function(result){
          $scope.paginator.totalItems = result.count;
          $scope.paginator.currentPage = result.page;
          $scope.data.books = result;
        }).then(function(){
          $document.scrollTop(0, 300);
        });
      },
    };
    $scope.paginator.pageChanged();
  });
