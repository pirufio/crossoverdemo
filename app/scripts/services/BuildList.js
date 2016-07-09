'use strict';

angular.module('secondTestApp')
.factory('BuildList', ['$http','BuildItem', function($http) {

    return {
      getBuildsList: function() {
        return $http.get('/data/builds.json').then(function(response) {
          return response.data;
        });
      }
    };


  /*function BuildList(listData, BuildItem) {
    this.BuildItem = BuildItem;
    if (listData) {
      this.setData(listData);
    }

  }

  BuildList.prototype = {
    setData: function(listData) {
      console.info('set data');
      angular.forEach(listData, function(value,key) {
        console.info(key);
        listData[key] = new BuildItem(value);
        console.info(listData[key].status);
      });
      angular.extend(this, listData);
    },
    load: function() {
      var scope = this;
      console.info('load');
      $http.get('/data/builds.json').success(function(data) {
        console.info('get data');
        scope.setData(data.data);
      });
    }
  };
  return BuildList;*/

}]);
