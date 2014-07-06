'use strict';

describe('Service: userBook', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var userBook;
  beforeEach(inject(function (_userBook_) {
    userBook = _userBook_;
  }));

  it('should do something', function () {
    expect(!!userBook).toBe(true);
  });

});
