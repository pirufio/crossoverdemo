'use strict';

/**
 * @ngdoc function
 * @name secondTestApp.controller:AboutCtrl
 * @description
 * # BuildCtrl
 * Controller of the secondTestApp
 */
angular.module('secondTestApp')
  .controller('BuildCtrl', function ($scope,BuildAPI,BuildItem) {

    $scope.buildList = [];
    BuildAPI.getBuildsList().then(function(data){
       angular.forEach(data.data, function(value) {
         $scope.buildList.push( new BuildItem(value) );
       });
     });

  });
