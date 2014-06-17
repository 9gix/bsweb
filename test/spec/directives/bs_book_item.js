'use strict';

describe('Directive: bsBookItem', function () {

  // load the directive's module
  beforeEach(module('bswebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bs-book-item></bs-book-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bsBookItem directive');
  }));
});
