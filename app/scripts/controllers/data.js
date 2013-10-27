'use strict';

angular.module('timWhitneyApp')
  .controller('DataCtrl', function ($scope) {

    $scope.enterData = function() {
      console.log($scope.datepicker.date);
      console.log($scope.firstName);
      console.log($scope.lastName);
      console.log($scope.dateOfBirth);
      console.log($scope.gender);
      console.log($scope.race);
      console.log($scope.unstablyHoused);
      console.log($scope.limitedEnglish);
      console.log($scope.minutes);
      console.log($scope.staffName);
      console.log($scope.date);
      console.log($scope.ccInfo);
      console.log($scope.ccPhone);
      console.log($scope.ccReferral);
      console.log($scope.provider);
      console.log($scope.status);


      alert('Data Entered');
    }
  });
