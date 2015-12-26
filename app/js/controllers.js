'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', '$http',
    function($scope, $http) {
    $http.get('teams/teams.json').success(function(data) {
        $scope.teams = data;
        //console.log(data);
    });
    $scope.orderProp = '-pts';
}]);
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('teams/' + $routeParams.teamId + '.json').success(function(data){
            $scope.team = data;
        });
}]);
footballAppControllers.controller('TeamsMatchCtrl', ['$scope',
    function($scope){
        $scope.showTeams = function(){
            var data = JSON.parse($scope.teams);
            for (var team in data){
                console.log(team);
            }
        };
    }
])