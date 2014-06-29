'use strict';

describe('Controller: MybookaddCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var MybookaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MybookaddCtrl = $controller('MybookaddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
