<div class="chart">
  <div>
    <div class="col-sm-9">
      <canvas
        id="pie"
        class="chart chart-pie"
        chart-data="data"
        chart-labels="labels"
        chart-options="options">
      </canvas>
    </div>
    <div class="col-sm-3">
      <h3>{{item.percentPassed  | number : 0}}%</h3>
    </div>
  </div>
  <div
    class="col-sm-12 progress chart-covered">
    <div
      class="progress-bar progress-bar-{{item.covered}}"
      role="progressbar"
      aria-valuenow="{{item.covered}}"
      aria-valuemin="0"
      aria-valuemax="100">
      {{item.covered}}%
      <p>Code Covered</p>
    </div>
  </div>
</div>
