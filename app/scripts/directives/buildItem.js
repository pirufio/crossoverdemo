'use strict';

angular.module('secondTestApp')
  .directive('buildItem', function() {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: '../../templates/build-item.tpl',
    item: '=',
    compile: function(tElem,attrs) {
      //do optional DOM transformation here
      return function($scope,elem,attrs) {
        //linking function here
      };
    }
  };
});
