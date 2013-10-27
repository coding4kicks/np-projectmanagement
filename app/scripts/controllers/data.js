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

      // Set default or null since firebase can't handle undefineds
      entry.dateKey = dateKey;
      entry.firstName = $scope.firstName || null
      entry.lastName = $scope.lastName || null;
      entry.dateOfBirth = $scope.dateOfBirth || null;
      entry.gender = $scope.gender || null;
      entry.ethnicity = $scope.ethnicity || null;
      entry.unstablyHoused = $scope.unstablyHoused || 'no';
      entry.limitedEnglish = $scope.limitedEnglish || 'no';
      entry.minutes = $scope.minutes || null;
      entry.staffName = $scope.staffName || null;
      entry.ccInfo = $scope.ccInfo || null;
      entry.ccPhone = $scope.ccPhone || null;
      entry.ccReferral = $scope.ccReferral || null;
      entry.provider = $scope.provider || null;
      entry.status = $scope.status || null;

      console.log(entry);

      var ref = new Firebase('https://np-projectmanagement.firebaseIO.com/project');
      angularFire(ref, $scope, 'project', {})
        .then(function(){
          if(entry.gender){$scope.project.totals.gender[entry.gender] += 1;}
          if(entry.ethnicity){$scope.project.totals.ethnicity[entry.ethnicity] += 1;}
          //if(entry.ccInfo){$scope.project.screeningActions[entry.dateKey]}
          alert('Data Entered');
        });
    }
  });
