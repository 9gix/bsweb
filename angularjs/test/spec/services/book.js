'use strict';

describe('Service: Book', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var Book;
  beforeEach(inject(function (_Book_) {
    Book = _Book_;
  }));

  it('should do something', function () {
    expect(!!Book).toBe(true);
  });

});
