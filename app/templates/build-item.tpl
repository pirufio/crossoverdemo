
<tr ng-class="{'uncompleted': !item.completed}">
  <td>{{item.name}}</td>
  <td>{{item.owner}}</td>
  <td>{{item.timeStarted| date:'MM-dd-yyyy HH:mm Z'}}</td>
  <td>{{item.state}}</td>
  <td><span class="glyphicon" ng-class="{'glyphicon-unchecked': !item.metricsOk, 'glyphicon-check': item.metricsOk}"></span></td>
  <td><span class="glyphicon" ng-class="{'glyphicon-unchecked': !item.buildOk, 'glyphicon-check': item.buildOk }"></span></td>
  <td><span class="glyphicon" ng-class="{'glyphicon-unchecked': !item.unitTestOk, 'glyphicon-check': item.unitTestOk}"></span></td>
  <td><span class="glyphicon" ng-class="{'glyphicon-unchecked': !item.functionalTestOk, 'glyphicon-check': item.functionalTestOk}"></span></td>
</tr>

