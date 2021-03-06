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