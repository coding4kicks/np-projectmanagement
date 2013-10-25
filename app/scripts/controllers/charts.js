'use strict';

angular.module('timWhitneyApp')
  .controller('ChartsCtrl', function ($scope, $window) {

    
    initBarChart($window);
    initDonutChart($window);
    initLineChart($window);
    initAreaChart($window);

    function initBarChart($window) {
      // Morris Bar Chart
      Morris.Bar({
          element: 'hero-bar',
          data: [
              {gender: 'Male', total: 1236},
              {gender: 'Female', total: 1537}
              ],
          xkey: 'gender',
          ykeys: ['total'],
          labels: ['Total'],
          barRatio: 0.4,
          xLabelMargin: 10,
          hideHover: 'auto',
          barColors: ["#3d88ba"]
      });
    };

    function initDonutChart($window) {
      // Morris Donut Chart
      Morris.Donut({
          element: 'hero-donut',
          data: [
              {label: 'African American', value: 25 },
              {label: 'Caucasian', value: 35 },
              {label: 'Latin', value: 25 },
              {label: 'Asian', value: 10 },
              {label: 'Other', value: 5 }
          ],
          colors: ["#30a1ec", "#76bdee", "#c4dafe"],
          formatter: function (y) { return y + "%" }
      });
    };

    function initLineChart($window) {
      // Morris Line Chart
      var tax_data = [
          {"period": "2013-01", "initiated": 200, "ineligible": 60, "notInitiated": 125},
          {"period": "2013-02", "initiated": 351, "ineligible": 29, "notInitiated": 111},
          {"period": "2013-03", "initiated": 469, "ineligible": 18, "notInitiated": 250},
          {"period": "2013-04", "initiated": 246, "ineligible": 61, "notInitiated": 155},
          {"period": "2013-05", "initiated": 171, "ineligible": 76, "notInitiated": 135},
          {"period": "2013-06", "initiated": 155, "ineligible": 81, "notInitiated": 189},
          {"period": "2013-07", "initiated": 226, "ineligible": 20, "notInitiated": 89},
          {"period": "2013-08", "initiated": 245, "ineligible": 50, "notInitiated": 145},
          {"period": "2013-09", "initiated": 171, "ineligible": 76, "notInitiated": 80},
          {"period": "2013-10", "initiated": 155, "ineligible": 81, "notInitiated": 99},
          {"period": "2013-11", "initiated": 226, "ineligible": 20, "notInitiated": 110},
          {"period": "2013-12", "initiated": 245, "ineligible": 50, "notInitiated": 100}
      ];
      Morris.Line({
          element: 'hero-graph',
          data: tax_data,
          xkey: 'period',
          xLabels: "month",
          ykeys: ['initiated', 'ineligible', 'notInitiated'],
          labels: ['Initiated', 'Ineligible', 'Not Initiated']
      });
    };

    function initAreaChart($window) {
      // Morris Area Chart
      $window.Morris.Area({
          element: 'hero-area',
          data: [
              {period: '2013-01', info: 150, phone: 99, referral: 47},
              {period: '2013-02', info: 160, phone: 110, referral: 41},
              {period: '2013-03', info: 180, phone: 120, referral: 31},
              {period: '2013-04', info: 213, phone: 110, referral: 89},
              {period: '2013-05', info: 112, phone: 85, referral: 93},
              {period: '2013-06', info: 230, phone: 180, referral: 81},
              {period: '2013-07', info: 300, phone: 190, referral: 88},
              {period: '2013-08', info: 100, phone: 80, referral: 75},
              {period: '2013-09', info: 70, phone: 45, referral: 58},
              {period: '2013-010', info: 154, phone: 76, referral: 91},
              {period: '2013-011', info: 200, phone: 88, referral: 79},
              {period: '2013-012', info: 250, phone: 110, referral: 11}
          ],
          xkey: 'period',
          ykeys: ['info', 'phone', 'referral'],
          labels: ['Info', 'Phone', 'Referral'],
          lineWidth: 2,
          hideHover: 'auto',
          lineColors: ["#81d5d9", "#a6e182", "#67bdf8"]
        });
    };
  });
