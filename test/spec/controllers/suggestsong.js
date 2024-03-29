'use strict';

describe('Controller: SuggestsongCtrl', function () {

  // load the controller's module
  beforeEach(module('karaokeApp'));

  var SuggestsongCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuggestsongCtrl = $controller('SuggestsongCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
