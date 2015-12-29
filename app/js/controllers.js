'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', 'TeamsService', '$http',
    function($scope, TeamsService, $http) {
        //$scope.teams = TeamsService.getData();
    $http.get('teams/england.json').success(function(data) {
        $scope.teams = data;
    });
    $scope.orderProp = '-pts';
}]);
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('teams/' + $routeParams.teamId + '.json').success(function(data){
            $scope.team = data;
        });
}]);
footballAppControllers.controller('ChessTableCtrl', ['$scope', function($scope){
    //$scope.teams = TeamsService.getData();
    $http.get('teams/england.json').success(function(data) {
        console.log(data);
        $scope.teams = JSON.parse(data);
    });

}])
footballAppControllers.controller('TourCtrl', ['$scope', '$routeParams', 'TeamsService',
    function($scope, $routeParams, TeamsService){
        $scope.tourNo = $routeParams.tourNo;
        //$scope.matches = TeamsService.getTour($scope.tourNo);
        $scope.matches = [
            {
                team1: 'team1',
                team2: 'team2',
                result1: 5,
                result2: 0
            },
            {
                team1: 'team3',
                team2: 'team4',
                result1: 4,
                result2: 2
            },
            {
                team1: 'team5',
                team2: 'team6',
                result1: 3,
                result2: 3
            },
            {
                team1: 'team7',
                team2: 'team8',
                result1: 8,
                result2: 3
            },
        ]
    }
]);
footballAppControllers.controller('NavbarCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $routeParams.tourNo = $scope.tourNo;
}])