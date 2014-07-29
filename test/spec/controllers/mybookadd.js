'use strict';

describe('Controller: MybookaddCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var MyBookAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyBookAddCtrl = $controller('MyBookAddCtrl', {
      $scope: scope
    });
  }));
});
