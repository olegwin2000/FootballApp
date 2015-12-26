var footballApp = angular.module('FootballApp', [
    'ngRoute',
    'footballAppControllers',
    'footballAppFilters',
    'footballAppDirectives'
]);
footballApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/teams', {
                templateUrl: 'partials/teams-list.html',
                controller: 'TeamsListCtrl'
            }).
            when('/teams/:teamId', {
                templateUrl: 'partials/team-info.html',
                controller: 'TeamInfoCtrl'
            }).
            when('/chess-table', {
                templateUrl: 'partials/chess-table.html',
                controller: 'ChessTableCtrl'
            }).
            otherwise({
                redirectTo: '/teams'
            });
}]);