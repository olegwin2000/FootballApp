var footballAppDirectives = angular.module('footballAppDirectives', []);

footballAppDirectives.directive('chessTable', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/chess-table.html',
        replace: true
    }
})