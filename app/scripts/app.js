'use strict';

angular.module('timWhitneyApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/undefined', {
        templateUrl: 'views/undefined.html',
        controller: 'UndefinedCtrl'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
