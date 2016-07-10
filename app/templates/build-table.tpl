<table class="table table-borderless">
  <thead>
  <tr>
    <td>
      Changelist / Build
    </td>
    <td>
      Owner
    </td>
    <td>
      Time Started
    </td>
    <td>
      State
    </td>
    <td>
      Metrics
    </td>
    <td>
      Build
    </td>
    <td>
      Unit Test
    </td>
    <td>
      Functional Test
    </td>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td colspan="8">
      <div class="separator" ng-show="!$last"></div>
    </td>
  </tr>
  <tr class="data" ng-class="{'uncompleted': !item.completed, 'ok' : item.passed && item.completed, 'fail' : !item.passed, 'expanded':item.expanded }"
      ng-repeat-start="item in builds"
      ng-click="showHideDetails(item)">
    <td>
      <i class="fa" aria-hidden="true" ng-class="{'fa-laptop': item.type==='build' , 'fa-fire': item.type==='firewall'}"></i>
      {{item.name}}
    </td>
    <td>{{item.owner}}</td>
    <td>{{item.timeStarted| date:'MM-dd-yyyy HH:mm'}}</td>
    <td> <span class="badge">{{item.state}} </span></td>
    <td>
      <div
        ng-if="item.state !== 'Running'"
        class="alert"
        ng-class="{'alert-success': (item.metricsOk && item.completed), 'alert-danger': (!item.metricsOk && item.completed),'alert-default':!item.completed }">
      </div>
      <div
        ng-if="item.state === 'Running'"
        class="progress">
        <div
          class="progress-bar progress-bar-{{item.buildData.completion}}"
          role="progressbar"
          aria-valuenow="{{item.buildData.completion}}"
          aria-valuemin="0"
          aria-valuemax="100">
        </div>
      </div>
    </td>
    <td>
      <div class="alert"
           ng-class="{'alert-success': (item.buildOk && item.completed), 'alert-danger': (!item.buildOk && item.completed),'alert-default':!item.completed }">
      </div>
    </td>
    <td>
      <div class="alert"
           ng-class="{'alert-success': (item.unitTestOk && item.completed), 'alert-danger': (!item.unitTestOk && item.completed),'alert-default':!item.completed}">
      </div>
    </td>
    <td>
      <div class="alert"
           ng-class="{'alert-success': (item.functionalTestOk && item.completed), 'alert-danger': (!item.functionalTestOk && item.completed),'alert-default':!item.completed}">
      </div>
    </td>
  </tr>
  <tr ng-show="item.expanded" ng-class="{'pullDown':item.expanded, 'ok' : item.passed, 'fail' : !item.passed }">
    <td colspan="8">
      <build-details item="item"></build-details>
    </td>
  </tr>
  <tr ng-repeat-end>
    <td colspan="8">
      <div class="separator" ng-show="!$last"></div>
    </td>
  </tr>
  </tbody>
</table>

