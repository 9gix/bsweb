'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach some books', function () {
    expect(scope.books.length).toBe(2);
  });
});
