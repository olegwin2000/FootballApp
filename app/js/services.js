var footballAppServices = angular.module('footballAppServices', ['ngResource']);
footballAppServices.factory('Team', ['$resource',
    function($resource){
        return $resource('teams/:teamId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray:true}
        });
}]);
footballAppServices.service('TeamsService', function(){
    var matchesData = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    function getTourMatches(tour, teamsArray) {

    }
    this.setResult = function(team1, team2, result1, result2){
        matchesData[team1][team2] = '' + result1 + ':' + result2;
    }
    this.getMatchesData = function(){
        console.log(matchesData);
    };
    this.getTour = function(tourNo, teamsArray){
        var tour = parseInt(tourNo);
        return getTourMatches(tour, teamsArray)
    }
})