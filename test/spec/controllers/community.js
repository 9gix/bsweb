'use strict';

describe('Controller: CommunityCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var CommunityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommunityCtrl = $controller('CommunityCtrl', {
      $scope: scope
    });
  }));
});
