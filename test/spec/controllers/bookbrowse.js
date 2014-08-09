'use strict';

describe('Controller: BookBrowseCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var BookBrowseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookBrowseCtrl = $controller('BookBrowseCtrl', {
      $scope: scope
    });
  }));
});
