'use strict';

angular.module('secondTestApp')
.factory('BuildList', ['$http','BuildItem', function($http, BuildItem) {

  function BuildList(listData) {

    if (listData) {
      this.setData(listData);
    }

  }

  BuildList.prototype = {
    setData: function(listData) {
      angular.extend(this, listData);
    },
    load: function() {
      var scope = this;
      $http.get('/data/builds.json').success(function(data) {

        angular.forEach(data.data, function(value,key) {
          data.data[key] = new BuildItem(value);
        });

        scope.setData(data.data);
      });
    }
  };
  return BuildList;
}]);
