<div class="col-md-12 details">
  <div class="quarter">
    <div class="panel" ng-class="{'panel-success': (item.metricsOk && item.completed), 'panel-danger': (!item.metricsOk && item.completed),'panel-default':!item.completed }">
      <div class="panel-heading">
        <h3 class="panel-title">Metrics</h3>
      </div>
      <div class="panel-body">
        <div class="col-sm-5 text-center">
          <div class="metrics-label">
            <i class="fa {{getArrowClass(item.buildData.metrics.test)}}"></i>
            <span class="metrics-data">{{item.buildData.metrics.test.actual}}</span>
          </div>
          <p>Test</p>
        </div>
        <div class="col-sm-7 text-center">
          <div class="metrics-label">
            <i class="fa {{getArrowClass(item.buildData.metrics.maintainability)}}"></i>
            <span class="metrics-data">{{item.buildData.metrics.maintainability.actual}}</span>
          </div>
          <p>Maintainability</p>
        </div>
        <div class="col-sm-5 text-center">
          <div class="metrics-label">
            <i class="fa {{getArrowClass(item.buildData.metrics.security)}}"></i>
            <span class="metrics-data">{{item.buildData.metrics.security.actual}}</span>
          </div>
          <p>Security</p>
        </div>
        <div class="col-sm-7 text-center">
          <div class="metrics-label">
            <i class="fa {{getArrowClass(item.buildData.metrics.workmanship)}}"></i>
            <span class="metrics-data">{{item.buildData.metrics.workmanship.actual}}</span>
          </div>
          <p>Workmanship</p>
        </div>
      </div>
    </div>
  </div>
  <div class="quarter">
    <div class="panel" ng-class="{'panel-success': (item.buildOk && item.completed), 'panel-danger': (!item.buildOk && item.completed),'panel-default':!item.completed }">
      <div class="panel-heading">
        <h3 class="panel-title">Build</h3>
      </div>
      <div class="panel-body">
        <div class="col-sm-6 text-center" ng-show="item.buildData.build.debug">
          <div>
            <i class="fa fa-laptop build-icon" aria-hidden="true">
            </i>
          </div>
          <div>
            Debug
          </div>
        </div>
        <div class="col-sm-6 text-center" ng-show="item.buildData.build.release">
          <div>
            <i class="fa fa-laptop build-icon" aria-hidden="true">
            </i>
          </div>
          <div>
            Release
          </div>
        </div>
        <div class="col-sm-12 text-center">
          <div>{{item.buildData.build.date | date:'HH:mm MM/dd/yyyy'}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="quarter">
    <div class="panel" ng-class="{'panel-success': (item.unitTestOk && item.completed), 'panel-danger': (!item.unitTestOk && item.completed),'panel-default':!item.completed }">
      <div class="panel-heading">
        <h3 class="panel-title">Unit Test</h3>
      </div>
      <div class="panel-body">
        <test-chart item="item.buildData.unitTest"></test-chart>
      </div>
    </div>
  </div>
  <div class="quarter">
    <div class="panel" ng-class="{'panel-success': (item.functionalTestOk && item.completed), 'panel-danger': (!item.functionalTestOk && item.completed),'panel-default':!item.completed }">
      <div class="panel-heading">
        <h3 class="panel-title">Functional Test</h3>
      </div>
      <div class="panel-body">
        <test-chart item="item.buildData.functionalTest"></test-chart>
      </div>
    </div>
  </div>
  <div class="quarter result">
    <div class="panel panel-default">
      <div class="panel-body">
        <h5 class="text-center">Result:</h5>
        <h4 class="text-center">{{item.result}}</h4>
        <div ng-if="item.passed">
          <div ng-if="item.type === 'build'">
            <label  for="deploy-list">select where to deploy:</label>
            <select id="deploy-list" class="form-control col-sm-12">
              <option value="Development">Development</option>
              <option value="Staging">Staging</option>
              <option value="Production">Production</option>
            </select>
            <button type="button" class="btn btn-primary col-sm-12"><i class="fa fa-download"></i> deploy</button>
          </div>
          <div ng-if="item.type === 'firewall'">
            <h2 class="text-center">Auto Merged</h2>
            <button type="button" class="btn btn-primary col-sm-12"><i class="fa fa-search"></i> merge build</button>
          </div>
        </div>
        <div ng-if="!item.passed">
          <ul class="list-group">
            <li ng-repeat="cause in item.rejectionCauses" class="list-group-item">{{cause}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
