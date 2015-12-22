'use strict';

/* Controllers */

var footballApp = angular.module('FootballApp', ['FootballAppFilters']);

footballApp.controller('FootballAppCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('teams/teams.json').success(function(data) {
    $scope.teams = data;
  });

}]);