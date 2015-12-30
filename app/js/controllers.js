'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', 'TeamsService', '$http',
    function($scope, TeamsService, $http) {
        $scope.orderProp = '-pts';
        $http.get('teams/england.json').success(function(response) {
            TeamsService.teams = response;
            $scope.teams = response;
        });
        $scope.matchesData = TeamsService.getMatchesData();
    }
]);
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('teams/' + $routeParams.teamId + '.json').success(function(data){
            $scope.team = data;

        });
}]);
footballAppControllers.controller('ChessTableCtrl', ['$scope',
    function($scope){
    }
])
footballAppControllers.controller('TourCtrl', ['$scope', '$routeParams', 'TeamsService',
    function($scope, $routeParams, TeamsService){
        $scope.tourNo = $routeParams.tourNo;
        //$scope.teams = TeamsService.getData();
        $scope.teams = TeamsService.teams;
        $scope.matches = TeamsService.getTour($scope.teams, $scope.tourNo);
        $scope.submit = function(){
            $scope.matches.forEach(function(match){
                console.log($scope.matches);
                //TeamsService.setResult
            });
            //console.log($scope.matches)
        }
    }
]);
footballAppControllers.controller('NavbarCtrl', ['$scope', 'TeamsService',
    function($scope, TeamsService){
        //$routeParams.tourNo = $scope.tourNo;
        $scope.toursArray = TeamsService.getToursArray;
        $scope.tour = 1;
    }
]);