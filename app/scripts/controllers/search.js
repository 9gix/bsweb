'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('SearchCtrl',
              ['$scope', '$location', '$document', 'Book', 'Category',
                  function ($scope, $location, $document, Book, Category) {
    $scope.page = {
      title: 'Search Result',
    };
    
    Category.withOwner().then(function(result){
      $scope.categories = result;
    });
    
    $scope.paginator = {
      totalItems: 0,
      currentPage: 1,
      itemPerPage: 20,
      maxSize: 10,
      pageChanged: function(){
        Book.search(
          $location.search().q,
          $scope.paginator.currentPage
        ).then(function(result){
          $scope.paginator.totalItems = result.count;
          $scope.paginator.currentPage = result.page;
          $scope.books = result;
        }).then(function(){
          $document.scrollTop(0, 300);
        });
      },
    };
    $scope.paginator.pageChanged();
  }]);
