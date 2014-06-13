'use strict';

describe('Controller: NavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('bswebApp'));

  var NavbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));


  describe('brand logo', function(){
    it('should display logo', function(){});
    it('should link to homepage', function(){});
  });

  describe('user', function(){
    describe('not authenticated', function(){
        it('should display login button', function () {});
    });

    describe('authenticated', function(){
        describe('navigation icon', function(){

            describe('logout', function(){
                it('should be visible', function(){});
                it('should logout user when clicked', function(){});
            });
            describe('message', function(){
                it('should be visible', function(){});
                it('should show the number of unread message', function(){});
                it('should link to user conversation list', function(){});
            });
        });

        describe('moderator', function(){
            it('should see moderator menu', function(){});
        });
    });
  });

});
