'use strict';

describe('Service: accessLevel', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var accessLevel;
  beforeEach(inject(function (_accessLevel_) {
    accessLevel = _accessLevel_;
  }));

  it('should do something', function () {
    expect(!!accessLevel).toBe(true);
  });

});
