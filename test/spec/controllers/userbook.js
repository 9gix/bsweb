'use strict';

describe('Controller: UserbookCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var UserbookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserbookCtrl = $controller('UserBookCtrl', {
      $scope: scope
    });
  }));
});
