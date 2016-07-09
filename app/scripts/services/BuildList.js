'use strict';

angular.module('secondTestApp')
.factory('BuildList', ['$http','BuildItem', function($http) {

    return {
      getBuildsList: function() {
        return $http.get('/data/builds.json').then(function(response) {
          return response.data;
        });
      }
    };

}]);
