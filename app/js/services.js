var footballAppServices = angular.module('footballAppServices', ['ngResource']);
footballAppServices.factory('Team', ['$resource',
    function($resource){
        return $resource('teams/:teamId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray:true}
        });
}]);
footballAppServices.service('TeamsService', ['$http', function($http){
    var matchesData = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    this.getMatchesData = function(){
        return matchesData;
    }
    var currentData = 'england';
    var teams;
    var getData = function(){
        var data;
        $http.get('teams/england.json').success(function(response) {
             data = response;
        });
        return data;
    }
    this.getTeams = function(){
        return getData();
    }

    this.getToursArray = function(){
        var array = [];
        for (var team = 0; team < 38; team++){
            array.push(team+1);
        }
        return array;
    }
    function getSchedule(teamsArray, tour) {
        if (!tour){
            var teams = teamsArray.length,
                halfTour = teams - 1,
                totalRounds = halfTour * 2,
                matchesPerRound = teams / 2,
                rounds = [];
            for (var round = 0; round < totalRounds; round++){
                var matches = [];
                for (var match = 0; match < matchesPerRound; match++){
                    var home = (round + match) % (teams - 1);
                    var away = (teams - 1 - match + round) % (teams - 1);
                    if (match === 0) {
                        away = teams - 1;
                    }
                    if (round >= halfTour) {
                        var swap = home;
                        home = away;
                        away = swap;
                    }

                    matches.push({team1: home, team2: away});
                }
                rounds.push(matches);
            }
            return rounds;
        }
        return getSchedule(teamsArray)[tour - 1];
    }
    function setVict(teamsArray, team1, team2){
        teamsArray[team1].won++;
        teamsArray[team2].los++;
    }
    function setDraw(teamsArray, team1, team2){
        teamsArray[team1].drw++;
        teamsArray[team2].drw++;
    }
    this.setResult = function(teamsArray, team1, team2, result1, result2){
        if (!matchesData[team1][team2]) {
            if (result1 > result2) {
                setVict(teamsArray, team1, team2);
                //matchesData[team1][team2] = '+';
            } else if (result2 > result1){
                setVict(teamsArray, team2, team1)
                //matchesData[team1][team2] = '-';
            } else {
                setDraw(teamsArray, team1, team2);
                //matchesData[team1][team2] = ':';
            };
            matchesData[team1][team2] = result1 + ':' + result2;
        }
    }
    this.getMatchesData = function(){
        //console.log(matchesData);
        return matchesData;
    };
    this.getTour = function(teamsArray, tourNo){
        var tour = parseInt(tourNo);
        return getSchedule(teamsArray, tourNo);
    };

}])