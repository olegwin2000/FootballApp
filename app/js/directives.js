var footballAppDirectives = angular.module('footballAppDirectives', []);

footballAppDirectives.directive('chessTable', function(){
    return {
        restrict: 'E',
        template: '<span>tbd: chess-table</span>',
        replace: true,
        link: function($scope, element, attrs){
            attrs.$observe('name', function(value){
                element.find('span').text(value);
            })
        }
    }
})