'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', 'TeamsService', '$http',
    function($scope, TeamsService, $http) {
        //$scope.teams = TeamsService.getData();
    $http.get('teams/england.json').success(function(data) {
        $scope.teams = data;
        TeamsService.teams = data;
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
        $scope.logTours = function(){
            //console.log(TeamsService.getTour());
            console.log(TeamsService.teams);
        }
        $scope.matches = TeamsService.getTour(TeamsService.teams, $scope.tourNo);
    }
]);
footballAppControllers.controller('NavbarCtrl', ['$scope', 'TeamsService', function($scope, TeamsService){
    //$routeParams.tourNo = $scope.tourNo;
    $scope.toursArray = TeamsService.getToursArray;
}]);