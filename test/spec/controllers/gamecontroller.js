'use strict';

describe('Controller: GamecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('aftestApp'));

  var GamecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamecontrollerCtrl = $controller('GamecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
