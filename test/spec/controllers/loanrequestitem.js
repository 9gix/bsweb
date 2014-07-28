'use strict';

describe('Controller: LoanrequestitemCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var LoanrequestitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanrequestitemCtrl = $controller('LoanrequestitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
