'use strict';

describe('Service: UserBook', function () {

  // load the service's module
  beforeEach(module('bswebApp'));

  // instantiate service
  var UserBook;
  beforeEach(inject(function (_UserBook_) {
    UserBook = _UserBook_;
  }));
});
