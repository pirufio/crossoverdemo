'use strict';

angular.module('secondTestApp')
  .directive('buildTable', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '../../templates/build-table.tpl',
    scope: {
      builds: '='
    },
    compile: function() {
      //do optional DOM transformation here
      return function($scope) {
        $scope.showHideDetails = function(item){
          if(item.completed) {
            item.expanded = !item.expanded;
          }
        };
      };
    }
  };
});
