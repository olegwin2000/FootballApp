'use strict';

/* Controllers */

var footballAppControllers = angular.module('footballAppControllers', []);

footballAppControllers.controller('TeamsListCtrl', ['$scope', 'TeamsService', '$http',
    function($scope, TeamsService, $http) {
        console.log('TeamListCtrl triggered')
        $scope.orderProp = '-pts';
        $http.get('teams/england.json').success(function(response) {
            TeamsService.teams = response;
            $scope.teams = response;
            console.log('json loaded!')
        });
        //$scope.matchesData = TeamsService.getMatchesData();
    }
]);
footballAppControllers.controller('TeamInfoCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('teams/' + $routeParams.teamId + '.json').success(function(data){
            $scope.team = data;

        });
}]);
footballAppControllers.controller('ChessTableCtrl', ['$scope', 'TeamsService',
    function($scope, TeamsService){
        console.log('ChessTableCtrl triggered');
        $scope.teams = TeamsService.teams;
        $scope.matchesData = TeamsService.getMatchesData();
    }
])
footballAppControllers.controller('TourCtrl', ['$scope', '$routeParams', 'TeamsService',
    function($scope, $routeParams, TeamsService){
        $scope.tourNo = $routeParams.tourNo;
        //$scope.teams = TeamsService.getData();
        $scope.teams = TeamsService.teams;
        $scope.matches = TeamsService.getTour($scope.teams, $scope.tourNo);
        $scope.matchesData = TeamsService.getMatchesData();
        $scope.submit = function(){
            for (var i = 0; i < $scope.matches.length; i++){
                var currMatch = $scope.matches[i];
                if (!currMatch.result1 || !currMatch.result2) {
                    alert('Enter all values for results!');
                    return;
                }
            }
            $scope.matches.forEach(function(match){
                //console.log(match);
                console.log(match.team1, match.team2, match.result1, match.result2);
                TeamsService.setResult($scope.teams, match.team1, match.team2, match.result1, match.result2);
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
        $scope.fillRandom = function(){
            var teams = TeamsService.teams;
            console.log('result');
            for (var team1 = 0; team1 < teams.length; team1++){
                for (var team2 = 0; team2 < teams.length; team2++){
                    if (team1 == team2) continue;
                    var res1 = Math.round(Math.random()*5);
                    var res2 = Math.round(Math.random()*5);
                    console.log(res1, res2)
                    TeamsService.setResult(teams, team1, team2, res1, res2);
                }
            }
        }
    }
]);