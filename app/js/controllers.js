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
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('teams/' + $routeParams.teamId + '.json').success(function(data){
            $scope.team = data;
        });
}]);
footballAppControllers.controller('ChessTableCtrl', ['$scope',
    function($scope) {
        $scope.helloworld = 'Hello world';
    }
])
