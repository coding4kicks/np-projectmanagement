'use strict';

describe('Controller: ChartsCtrl', function () {

  // load the controller's module
  beforeEach(module('timWhitneyApp'));

  var ChartsCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $window) {
    scope = $rootScope.$new();
    $window.Morris = {};
    $window.Morris.Bar = jasmine.createSpy('Bar');
    $window.Morris.Donut = jasmine.createSpy('Donut');
    $window.Morris.Line = jasmine.createSpy('Line');
    $window.Morris.Area = jasmine.createSpy('Area');
    ChartsCtrl = $controller('ChartsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
