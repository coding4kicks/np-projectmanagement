'use strict';

angular.module('timWhitneyApp')
  .controller('DataCtrl', function ($scope, angularFire) {

    $scope.enterData = function() {
      var entry = {},
          date = $scope.datepicker && $scope.datepicker.date,
          // Set the month to a 01-12 or null if undefined
          month = (date && date.getMonth() && '0' + date.getMonth()) || null,
          year = (date && date.getFullYear()) || null,
          dateKey = null;

     // If valid date construct the date key
      if(month && year) {
        month = month.slice(-2) // Remove zero from last 3 months: 010, 011, 012
        dateKey = year + '-' + month;
      }; 

      console.log(dateKey);
      console.log($scope.firstName);
      console.log($scope.lastName);
      console.log($scope.dateOfBirth);
      console.log($scope.gender);
      console.log($scope.race);
      console.log($scope.unstablyHoused);
      console.log($scope.limitedEnglish);
      console.log($scope.minutes);
      console.log($scope.staffName);
      console.log($scope.ccInfo);
      console.log($scope.ccPhone);
      console.log($scope.ccReferral);
      console.log($scope.provider);
      console.log($scope.status);

      $scope.project = {};
      var ref = new Firebase('https://np-projectmanagement.firebaseIO.com/project');
      angularFire(ref, $scope, 'project', {})
        .then(function(){
          alert('Data Entered');
        });
    }
  });
