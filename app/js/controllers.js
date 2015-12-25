'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', 'Team',
    function($scope, Team) {
        //$http.get('teams/teams.json').success(function(data) {
        //    $scope.teams = data;
        //});
        $scope.teams = Team.query();
        $scope.orderProp = '-pts';
}]);
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('teams/' + $routeParams.teamId + '.json').success(function(data){
            $scope.team = data;
        });
}]);
