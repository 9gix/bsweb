'use strict';

/**
 * @ngdoc function
 * @name bswebApp.controller:BorrowdialogmodalCtrl
 * @description
 * # BorrowdialogmodalCtrl
 * Controller of the bswebApp
 */
angular.module('bswebApp')
  .controller('BorrowDialogModalCtrl', function ($scope, userBook) {
    var getDate = function(){ return new Date(); };
    var today = getDate()
    var nextYear = getDate().setFullYear(today.getFullYear() + 1);

    $scope.datepicker = {
      isOpen: false,
      format: 'dd-MMMM-yyyy',
      date: today,
      minDate: today,
      maxDate: nextYear,
      options: {
        startingDay: 1
      },
    };

    $scope.request = {
      date: $scope.datepicker.date,
      message: '',
    };

    $scope.send = function(){
      console.log('Sending');
      console.log($scope.request);
    };

    $scope.cancel = function(){
      $scope.$dismiss();
    };

    $scope.openDatePicker = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.datepicker.isOpen = true;
    };
  });
