        var ref = new Firebase('https://rc-democrud.firebaseio.com/');

        angular.
            module('client', ['firebase']).
            value('fbURL', 'https://rc-democrud.firebaseio.com/').
            factory('Clients', function(angularFireCollection, fbURL) {
              return angularFireCollection(ref);
               }).
            config(function($routeProvider) {
              $routeProvider.
              when('/', {controller:ListCtrl, templateUrl:'list.html'}).
              when('/edit/:clientId', {controller:EditCtrl, templateUrl:'detail.html'}).
              when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
              otherwise({redirectTo:'/'});
            });
           
        function ListCtrl($scope, Clients) {
          $scope.clients = Clients;
        };
         
        function CreateCtrl($scope, $location, $timeout, Clients) {
            $scope.save = function() {
            Clients.add($scope.client, function() {
            $timeout(function() { $location.path('/'); });
            });
          }
        };
         
        function EditCtrl($scope, $location, $routeParams, angularFire, fbURL) {
          var refId = new Firebase(fbURL + $routeParams.clientId);
          
          angularFire(refId, $scope, 'remote', {}).
          then(function() 
          {
            $scope.client = angular.copy($scope.remote); //brings remote data into live
            $scope.client.$id = $routeParams.clientId; //gets id from URL
            
            $scope.isClean = function() {
              return angular.equals($scope.remote, $scope.client); // disables Save if live = remote
            }

            $scope.destroy = function() {
              $scope.remote = null; // destroys remote record
              $location.path('/'); //resets url
            };

            $scope.save = function() {
              $scope.remote = angular.copy($scope.client); //copies live data into remote
              $location.path('/'); //resets url
            };
          });

        };