var footballAppServices = angular.module('footballAppServices', ['ngResource']);
footballAppServices.factory('Team', ['$resource',
    function($resource){
        return $resource('teams/:teamId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray:true}
        });
}]);