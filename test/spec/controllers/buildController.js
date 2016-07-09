'use strict';

describe('Controller: BuildCtrl', function () {

  // load the controller's module
  beforeEach(module('secondTestApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('BuildCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should contain a buildList array', function () {
    expect(scope.buildList).toBeDefined();
  });
});
