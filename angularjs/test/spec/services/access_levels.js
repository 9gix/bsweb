'use strict';

describe('Service: ACCESS_LEVELS', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var ACCESS_LEVELS;
  beforeEach(inject(function (_ACCESS_LEVELS_) {
    ACCESS_LEVELS = _ACCESS_LEVELS_;
  }));

  it('should do something', function () {
    expect(!!ACCESS_LEVELS).toBe(true);
  });

});
