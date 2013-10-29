'use strict';

angular.module('timWhitneyApp')
  .controller('ChartsCtrl', function ($scope, $window, angularFire) {

    $scope.project = {};
    $scope.totalSeen = 0;
    $scope.totalInitiated = 0;
    $scope.totalIneligible = 0;
    $scope.totalNotInitiated = 0;

    var ref = new Firebase('https://np-projectmanagement.firebaseIO.com/project');
    angularFire(ref, $scope, 'project', {})
      .then(function(){

        var careActions = [];
        var screeningActions = [];

        for(var month in $scope.project.screeningActions) {
          var data = {};
          data.period = month;
          data.initiated = $scope.project.screeningActions[month].initiated;
          data.ineligible = $scope.project.screeningActions[month].ineligible;
          data.notInitiated = $scope.project.screeningActions[month].notInitiated;
          screeningActions.push(data);
          $scope.totalInitiated += data.initiated;
          $scope.totalIneligible += data.ineligible;
          $scope.totalNotInitiated += data.initiated;
          $scope.totalSeen += (data.initiated + data.ineligible + data.initiated);
        }

        for(var month in $scope.project.careActions) {
          var data = {};
          data.period = month;
          data.info = $scope.project.careActions[month].info;
          data.phone = $scope.project.careActions[month].phone;
          data.referral = $scope.project.careActions[month].referral;
          careActions.push(data);
        }

        var barData = {
              'element': 'hero-bar',
              'data': [{'gender': 'Male', 'total': $scope.project.totals.gender.male},
                       {'gender': 'Female', 'total': $scope.project.totals.gender.female}],
              'xkey': 'gender',
              'ykeys': ['total'],
              'labels': ['Total']
            },

            donutData = {
              'element': 'hero-donut',
              'data': [{'label': 'African American', 'value': $scope.project.totals.ethnicity.african},
                       {'label': 'Caucasian', 'value': $scope.project.totals.ethnicity.caucasion},
                       {'label': 'Latin', 'value': $scope.project.totals.ethnicity.latin},
                       {'label': 'Asian', 'value': $scope.project.totals.ethnicity.asian},
                       {'label': 'Other', 'value': $scope.project.totals.ethnicity.other}]
              },

            lineData = {
              'element': 'hero-graph',
              'data': screeningActions,
              'xkey': 'period',
              'xLabels': 'month',
              'ykeys': ['initiated', 'ineligible', 'notInitiated'],
              'labels': ['Initiated', 'Ineligible', 'Not Initiated']
              },

            areaData = {
              'element': 'hero-area',
              'data': careActions,
              'xkey': 'period',
              'ykeys': ['info', 'phone', 'referral'],
              'labels': ['Info', 'Phone', 'Referral'],

            };
       
        initBarChart($window, barData);
        initDonutChart($window, donutData);
        initLineChart($window, lineData);
        initAreaChart($window, areaData);

      });

    function initBarChart($window, barData) {
      // Morris Bar Chart
      Morris.Bar({
        element: barData.element,
        data: barData.data,
        xkey: barData.xkey,
        ykeys: barData.ykeys,
        labels: barData.labels,
        barRatio: 0.4,
        xLabelMargin: 10,
        hideHover: 'auto',
        barColors: ["#3d88ba"]
      });
    };

    function initDonutChart($window, donutData) {
      // Morris Donut Chart
      Morris.Donut({
        element: donutData.element,
        data: donutData.data,
        colors: ["#30a1ec", "#76bdee", "#c4dafe"],
        formatter: function (y) { return y + "%" }
      });
    };

    function initLineChart($window, lineData) {
      // Morris Line Chart
      Morris.Line({
        element: lineData.element,
        data: lineData.data,
        xkey: lineData.xkey,
        xLabels: lineData.xLabels,
        ykeys: lineData.ykeys,
        labels: lineData.labels
      });
    };

    function initAreaChart($window, areaData) {
      // Morris Area Chart
      $window.Morris.Area({
        element: areaData.element,
        data: areaData.data,
        xkey: areaData.xkey,
        ykeys: areaData.ykeys,
        labels: areaData.labels,
        lineWidth: 2,
        hideHover: 'auto',
        lineColors: ["#81d5d9", "#a6e182", "#67bdf8"]
        });
    };
  });
