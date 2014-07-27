'use strict';

describe('Service: Channel', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var Channel;
  beforeEach(inject(function (_Channel_) {
    Channel = _Channel_;
  }));

  it('should do something', function () {
    expect(!!Channel).toBe(true);
  });

});
