'use strict';

/**
 * @ngdoc function
 * @name secondTestApp.controller:AboutCtrl
 * @description
 * # BuildCtrl
 * Controller of the secondTestApp
 */
angular.module('secondTestApp')
  .controller('BuildCtrl', function ($scope,BuildList) {

    $scope.buildList = new BuildList();
    $scope.buildList.load();
    console.log($scope.buildList);

  });
