'use strict';

angular.module('timWhitneyApp', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
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
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl'
      })
      .otherwise({
        redirectTo: '/charts'
      });
  })

  .controller('SideNavCtrl', function($scope) {

    $scope.navState = {};
    $scope.navState.charts = 'active';
    $scope.navState.data = '';

    $scope.activate = function(navItem){
      for(var item in $scope.navState) {
        $scope.navState[item] = '';
      }
      $scope.navState[navItem] = 'active';
    };

  });
