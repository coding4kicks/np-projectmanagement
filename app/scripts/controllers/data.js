'use strict';

angular.module('timWhitneyApp')
  .controller('DataCtrl', function ($scope, angularFire) {

    // Retrieve the project data
    var ref = new Firebase('https://np-projectmanagement.firebaseIO.com/project');
    angularFire(ref, $scope, 'project', {})

    $scope.races = [{name: 'African American'}, {name: 'Asian'}, {name: 'Caucasian'}, {name: 'Latin'}, {name: 'Other'}];

    // Enter new entry and update project details
    $scope.enterData = function() {
      var entry = {},
          date = $scope.datepicker && $scope.datepicker.date,
          // Set the month to a 01-12 or null if undefined
          month = (date && date.getMonth() && '0' + (date.getMonth() + 1).toString()) || null,
          year = (date && date.getFullYear()) || null,
          dateKey = null;

     // If valid date construct the date key
      if(month && year) {
        month = month.slice(-2) // Remove zero from last 3 months: 010, 011, 012
        dateKey = year + '-' + month;
      }; 

      // Set default or null since firebase can't handle undefined
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
      entry.status = $scope.status || null;

      // format ethnicity for data entry (make 1 word and lower case)
      if (entry.ethnicity) {
        entry.ethnicity = entry.ethnicity.name.split(' ')[0].toLowerCase();
      }

      // Update applicable fields
      if(entry.gender){$scope.project.totals.gender[entry.gender] += 1;}
      if(entry.ethnicity){$scope.project.totals.ethnicity[entry.ethnicity] += 1;}
      if(dateKey) {
        if(entry.ccInfo){$scope.project.careActions[dateKey]['info'] += 1;}
        if(entry.ccPhone){$scope.project.careActions[dateKey]['phone'] += 1;}
        if(entry.ccReferral){$scope.project.careActions[dateKey]['referral'] += 1;}
        if(entry.status){$scope.project.screeningActions[dateKey][entry.status] += 1;}
      }
      
      // Necessary for angularFire to recognize updates immediately.
      safeApply($scope);

      // Notify user data entered
      alert('Data Entered');
    }

    /**
     * @name safeApply
     * @procedure
     *
     * @description Enum of days of the week
     * @author https://coderwall.com/p/ngisma (in comments)
     */ 
    function safeApply($scope, fn) {
      var phase = $scope.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if (fn) {$scope.$eval(fn);}
      } 
      else {
        if (fn) {$scope.$apply(fn);}
        else {$scope.$apply();}
      }
    };

  
  
  });
