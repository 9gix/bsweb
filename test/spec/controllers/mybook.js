'use strict';

describe('Controller: MyBookCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var MybookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MybookCtrl = $controller('MyBookCtrl', {
      $scope: scope
    });
  }));
});
