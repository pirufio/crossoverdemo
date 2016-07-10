'use strict';

angular.module('secondTestApp')
  .directive('buildDetails', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '../../templates/build-details.tpl',
    scope: {
      item: '='
    },
    compile: function() {
      //do optional DOM transformation here
      return function($scope) {
        $scope.getArrowClass = function(data){
          if(data) {
            if (data.actual === data.previous) {
              return 'fa-arrow-right';
            } else {
              return data.actual > data.previous ? 'fa-arrow-up' : 'fa-arrow-down';
            }
          }
        };
      };
    }
  };
});
