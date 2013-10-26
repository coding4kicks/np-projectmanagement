'use strict';

angular.module('timWhitneyApp')
  .controller('ChartsCtrl', function ($scope, $window, angularFire) {

    $scope.project = {};
    var ref = new Firebase('https://np-projectmanagement.firebaseIO.com/project');
    angularFire(ref, $scope, 'project', {})
      .then(function(){

        var careActions = [];
        var screeningActions = [];

        for(var month in $scope.project.careActions) {
          var data = {};
          data.period = month;
          data.initiated = $scope.project.careActions[month].initiated;
          data.ineligible = $scope.project.careActions[month].ineligible;
          data.notInitiated = $scope.project.careActions[month].notInitiated;
          careActions.push(data);
        }

        for(var month in $scope.project.screeningActions) {
          var data = {};
          data.period = month;
          data.info = $scope.project.screeningActions[month].info;
          data.phone = $scope.project.screeningActions[month].phone;
          data.referral = $scope.project.screeningActions[month].referral;
          screeningActions.push(data);
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
              'data': careActions,
              'xkey': 'period',
              'xLabels': 'month',
              'ykeys': ['initiated', 'ineligible', 'notInitiated'],
              'labels': ['Initiated', 'Ineligible', 'Not Initiated']
              },

            areaData = {
              'element': 'hero-area',
              'data': screeningActions,
              //'data': [
              //    {'period': '2013-01', 'info': 150, 'phone': 99, 'referral': 47},
              //    {'period': '2013-02', 'info': 160, 'phone': 110, 'referral': 41},
              //    {'period': '2013-03', 'info': 180, 'phone': 120, 'referral': 31},
              //    {'period': '2013-04', 'info': 213, 'phone': 110, 'referral': 89},
              //    {'period': '2013-05', 'info': 112, 'phone': 85, 'referral': 93},
              //    {'period': '2013-06', 'info': 230, 'phone': 180, 'referral': 81},
              //    {'period': '2013-07', 'info': 300, 'phone': 190, 'referral': 88},
              //    {'period': '2013-08', 'info': 100, 'phone': 80, 'referral': 75},
              //    {'period': '2013-09', 'info': 70, 'phone': 45, 'referral': 58},
              //    {'period': '2013-10', 'info': 154, 'phone': 76, 'referral': 91},
              //    {'period': '2013-11', 'info': 200, 'phone': 88, 'referral': 79},
              //    {'period': '2013-12', 'info': 250, 'phone': 110, 'referral': 11}],
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
          //element: 'hero-area',
          //data: [
          //    {period: '2013-01', info: 150, phone: 99, referral: 47},
          //    {period: '2013-02', info: 160, phone: 110, referral: 41},
          //    {period: '2013-03', info: 180, phone: 120, referral: 31},
          //    {period: '2013-04', info: 213, phone: 110, referral: 89},
          //    {period: '2013-05', info: 112, phone: 85, referral: 93},
          //    {period: '2013-06', info: 230, phone: 180, referral: 81},
          //    {period: '2013-07', info: 300, phone: 190, referral: 88},
          //    {period: '2013-08', info: 100, phone: 80, referral: 75},
          //    {period: '2013-09', info: 70, phone: 45, referral: 58},
          //    {period: '2013-010', info: 154, phone: 76, referral: 91},
          //    {period: '2013-011', info: 200, phone: 88, referral: 79},
          //    {period: '2013-012', info: 250, phone: 110, referral: 11}
          //],
          //xkey: 'period',
          //ykeys: ['info', 'phone', 'referral'],
          //labels: ['Info', 'Phone', 'Referral'],
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
