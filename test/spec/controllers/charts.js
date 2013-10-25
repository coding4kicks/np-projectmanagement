'use strict';

describe('Controller: ChartsCtrl', function () {

  // load the controller's module
  beforeEach(module('timWhitneyApp'));

  var ChartsCtrl,
      scope,
      window;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $window) {
    scope = $rootScope.$new();
    window = $window;
    window.Morris = {};
    window.Morris.Bar = jasmine.createSpy('Bar');
    window.Morris.Donut = jasmine.createSpy('Donut');
    window.Morris.Line = jasmine.createSpy('Line');
    window.Morris.Area = jasmine.createSpy('Area');
    ChartsCtrl = $controller('ChartsCtrl', {
      $scope: scope
    });
  }));

  it('should create a bar chart', function () {
    expect(window.Morris.Bar).toHaveBeenCalled();
  });

  it('should create a donut chart', function () {
    expect(window.Morris.Donut).toHaveBeenCalled();
  });

  it('should create a line chart', function () {
    expect(window.Morris.Line).toHaveBeenCalled();
  });

  it('should create an area chart', function () {
    expect(window.Morris.Area).toHaveBeenCalled();
  });

});
