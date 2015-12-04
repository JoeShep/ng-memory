'use strict';

describe('Controller: AudiocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('aftestApp'));

  var AudiocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AudiocontrollerCtrl = $controller('AudiocontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
