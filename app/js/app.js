var footballApp = angular.module('FootballApp', ['FootballAppFilters', 'FootballAppControllers', 'ngRoute']);

footballApp.config(['$routeProvider',
    function($routeProvider){
    $routeProvider.
        when('/teams', {
            templateURL: 'partials/teams-list.html',
            controller: 'TeamListCtrl'
        }).
        when('/teams/:teamId', {
            templateURL: 'partials/team-info.html',
            controller: 'TeamInfoCtrl'
        }).
        otherwise({
            redirectTo: '/teams'
        });
}]);