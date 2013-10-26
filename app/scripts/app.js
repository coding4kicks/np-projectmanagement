'use strict';

angular.module('timWhitneyApp', ['firebase'])
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
  })

  .controller('SideNavCtrl', function($scope) {

    $scope.navState = {};
    $scope.navState.home = 'active';
    $scope.navState.charts = '';
    $scope.navState.data = '';

    $scope.activate = function(navItem){
      for(var item in $scope.navState) {
        $scope.navState[item] = '';
      }
      $scope.navState[navItem] = 'active';
    };

  });
