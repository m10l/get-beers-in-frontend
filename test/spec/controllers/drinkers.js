'use strict';

describe('Controller: DrinkersCtrl', function () {

  // load the controller's module
  beforeEach(module('getBeersInV2App'));

  var DrinkersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrinkersCtrl = $controller('DrinkersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
