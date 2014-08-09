'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BookCtrl', function ($scope, $state, $document, $stateParams, Book, Category) {
    $scope.page = {
      title: 'Browse Books Category',
    };
    
    $scope.currentState = $state.current.name

    Category.withOwner().then(function(result){
      $scope.categories = result;
    });

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
          $scope.books = result;
        }).then(function(){
          $document.scrollTop(0, 300);
        });
      },
    };
    $scope.paginator.pageChanged();
  });
