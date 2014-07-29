'use strict';

describe('Controller: ChannelCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var ChannelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChannelCtrl = $controller('ChannelCtrl', {
      $scope: scope
    });
  }));
});
