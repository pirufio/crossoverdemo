'use strict';

angular.module('secondTestApp')
  .directive('testChart', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '../../templates/test-chart.tpl',
    scope: {
      item: '='
    },
    compile: function() {
      //do optional DOM transformation here
      return function($scope) {
        if($scope.item) {
          $scope.labels = ["Passed", "Not Passed"];
          $scope.data = [$scope.item.passed, $scope.item.total - $scope.item.passed];
          $scope.item.percentPassed =  ($scope.item.passed / $scope.item.total) * 100;
        }
      };
    }
  };
});
