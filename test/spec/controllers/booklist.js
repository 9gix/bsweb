'use strict';

describe('Controller: BooklistCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var BooklistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BooklistCtrl = $controller('BooklistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
