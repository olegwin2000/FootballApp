var footballApp = angular.module('FootballApp', ['FootballAppFilters', 'FootballAppControllers', 'ngRoute']);

footballApp.config(['$routeProvider',
    function($routeProvider){
    $routeProvider.
        when('/teams', {
            templateURL: 'partials/team-list.html',
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