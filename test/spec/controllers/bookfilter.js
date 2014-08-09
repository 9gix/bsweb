'use strict';

describe('Controller: BookfilterCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var BookfilterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookfilterCtrl = $controller('BookfilterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
