'use strict';

describe('Service: Auth', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var Auth;
  beforeEach(inject(function (_Auth_) {
    Auth = _Auth_;
  }));

  it('should be able to login user');
  it('should be able to logout user', function () {});
  it('should be able to register user', function () {});
  it('should be able to get current user', function () {});
  it('should be able to know if current user logged in', function () {});
});
