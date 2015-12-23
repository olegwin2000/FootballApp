var footballApp = angular.module('footballApp', [
    'ngRoute',
    'footballAppControllers'
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
            otherwise({
                redirectTo: '/teams'
            });
}]);