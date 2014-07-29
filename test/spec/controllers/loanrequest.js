'use strict';

describe('Controller: LoanRequestCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var LoanRequestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanRequestCtrl = $controller('LoanRequestCtrl', {
      $scope: scope
    });
  }));

  it('should show loan request', function () {
  });

  describe('loan request', function(){
    describe('when approve', function(){
      it('should make the request', function(){});
      it('should notify the borrower', function(){});
      it('should notify the current holder', function(){});
      it('should create a channel and include owner in the channel', function(){});
      it('should invite borrower into the channel', function(){});
      it('should invite current holder into the channel', function(){});
    });
    describe('when reject', function(){
      it('should reject the request', function(){});
      it('should notify the borrower', function(){});
    });

  });
});
