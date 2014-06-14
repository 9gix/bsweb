'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  describe('login status', function(){
    describe('success', function(){
        describe('current user', function(){
          it('should be the end user', function(){});
        });
        describe('access level', function(){
          it('should be authenticated', function(){});
        });
    });

    describe('fail', function(){
        describe('current user', function(){
          it('should be empty', function(){});
        });
        describe('access level', function(){
          it('should be anonymous', function(){});
        });
    });
  });
});
