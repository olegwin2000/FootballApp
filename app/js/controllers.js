'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', '$http',
    function($scope, $http) {
    $http.get('teams/teams.json').success(function(data) {
        $scope.teams = data;
    });
    $scope.orderProp = '-pts';
}]);
footballAppControllers.controller('TeamsInfoCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
        $scope.teamId = $routeParams.phoneId;
}]);
