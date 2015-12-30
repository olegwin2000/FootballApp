var footballApp = angular.module('FootballApp', [
    'ngRoute',
    'footballAppControllers',
    'footballAppFilters',
    'footballAppDirectives',
    'footballAppServices'
]);
footballApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/chessTable', {
                //templateUrl: 'partials/teams-list.html',
                template: '<chess-table></chess-table>',
                controller: 'ChessTableCtrl'
            }).
            when('/teams/:teamId', {
                templateUrl: 'partials/team-info.html',
                controller: 'TeamInfoCtrl'
            }).
            when('/tour:tourNo', {
                templateUrl: 'partials/tour-info.html',
                controller: 'TourCtrl'
            }).
            otherwise({
                redirectTo: '/chessTable'
            });
}]);