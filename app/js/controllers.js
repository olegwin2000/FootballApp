'use strict';

/* Controllers */

var footballAppControllers = angular.module('FootballAppControllers', []);

footballAppControllers.controller('TeamListCtrl', ['$scope', '$http',
    function($scope, $http) {
    $http.get('teams/teams.json').success(function(data) {
        $scope.teams = data;
    });

}]);
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.teamId = $routeParams.teamId;
}]);
