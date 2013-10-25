'use strict';

describe('Controller: ChartsCtrl', function () {

  // load the controller's module
  beforeEach(module('timWhitneyApp'));

  var ChartsCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $window) {
    scope = $rootScope.$new();
    ChartsCtrl = $controller('ChartsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
