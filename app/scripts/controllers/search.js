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
              function ($scope, $location, $stateParams, $document,
                        Book, Category) {
    $scope.page = {
      title: 'Search Result',
    };

    $scope.paginator = {
      totalItems: 0,
      currentPage: 1,
      itemPerPage: 20,
      maxSize: 10,
      pageChanged: function(){
        Book.search(
          $location.search().q,
          $stateParams.categories,
          $scope.paginator.currentPage
        ).then(function(result){
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
