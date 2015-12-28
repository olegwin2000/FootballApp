'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', '$http',
    function($scope, $http) {
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
    $scope.data1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    $scope.data2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    $scope.data = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    $scope.changeValue = function(team1, team2, value){
        $scope.data[team1][team2] = value;
        $scope.data[team2][team1] = -value;
    }
    $scope.model = '1'
    //$scope.log = function(){
    //    console.log($scope.data);
    //}
}])
