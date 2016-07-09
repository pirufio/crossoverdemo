'use strict';

angular.module('secondTestApp')
  .factory('BuildItem', [function () {

    function BuildItem(itemData) {

      if (itemData) {
        this.setData(itemData);
      }

    }

    BuildItem.prototype = {
      setData: function (itemData) {
        angular.extend(this, itemData);
        var scope = this;
        scope.type = (itemData.build !== undefined) ? 'build' : 'firewall';
        scope.name = (itemData.build !== undefined) ? scope.build : scope.changeList;
        scope.timeStarted = scope.timeStarted ? new Date(scope.timeStarted * 1000) : null;
        scope.state = 0;
        scope.completed = true;
        scope.passed = false;
        scope.metricsOk = true;
        scope.buildOk = true;
        scope.unitTestOk = true;
        scope.functionalTestOk = true;
        scope.rejectionCauses = [];
        if (scope.buildData && scope.buildData.completion === 100 &&
          scope.buildData.metrics && scope.buildData.build &&
          scope.buildData.unitTest && scope.buildData.functionalTest) {
          if (scope.buildData.metrics.test.previous > scope.buildData.metrics.test.actual ||
            scope.buildData.metrics.maintainability.previous > scope.buildData.metrics.maintainability.actual ||
            scope.buildData.metrics.security.previous > scope.buildData.metrics.security.actual ||
            scope.buildData.metrics.workmanship.previous > scope.buildData.metrics.workmanship.actual) {
            scope.passed = false;
            scope.metricsOk = false;
            scope.rejectionCauses.push('Metrics reduction');
          } else if (!scope.buildData.build.debug || !scope.buildData.build.release) {
            scope.passed = false;
            scope.rejectionCauses = 'Incomplete build';
            scope.buildOk = false;
          } else if (((scope.buildData.unitTest.passed / scope.buildData.unitTest.total) * 100) < 50) {
            scope.passed = false;
            scope.unitTestOk = false;
            scope.rejectionCauses.push('Passed unit tests below 50%');
          } else if (((scope.buildData.functionalTest.passed / scope.buildData.functionalTest.total) * 100) < 50) {
            scope.passed = false;
            scope.rejectionCauses.push('Passed functional tests below 50%');
            scope.functionalTestOk = false;
          } else {
            scope.passed = true;
          }
        } else {
          scope.completed = false;
        }

        scope.state = '';
        scope.stateCode = 0;
        if(scope.type === 'build') {
          if(!scope.completed) {
            scope.stateCode = 0;
            scope.state = 'Pending';
          }else {
            scope.state = scope.passed ? 'Complete' : 'Fail';
            scope.stateCode = scope.passed ? 1 : 2;
          }
        }else if (scope.type === 'firewall') {
          if(!scope.completed) {
            scope.state = 'Running';
            scope.stateCode = 0;
          }else {
            scope.state = scope.passed ? 'Accepted' : 'Rejected';
            scope.stateCode = scope.passed ? 1 : 2;
          }
        }

        if(scope.stateCode == 0) {
          scope.metricsOk = false;
          scope.buildOk = false;
          scope.unitTestOk = false;
          scope.functionalTestOk = false;
        }

      }


    };
    return BuildItem;
  }]);

