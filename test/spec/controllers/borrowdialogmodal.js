'use strict';

describe('Controller: BorrowDialogModalCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var BorrowDialogModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BorrowDialogModalCtrl = $controller('BorrowDialogModalCtrl', {
      $scope: scope
    });
  }));
});
