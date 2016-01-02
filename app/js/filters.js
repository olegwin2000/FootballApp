'use strict';

/* Filters */

angular.module('footballAppFilters', []).filter('teamArea', function(){
    return function(input) {
        switch (input){
            case 'Champions League':
                return 'success';
            case 'Europa League':
                return 'info';
            case 'Outsider':
                return 'danger';
            default:
                return '';
        }
    }
})
.filter('chessTableFilter', function(){
        return function(input){
            if (!input) return '';
            var res = input.result1 - input.result2;
            if (res > 0) return 'won';
            if (res < 0) return 'los';
            if (res == 0) return 'drw';
            return '';
        }
    })