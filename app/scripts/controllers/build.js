'use strict';

/**
 * @ngdoc function
 * @name secondTestApp.controller:AboutCtrl
 * @description
 * # BuildCtrl
 * Controller of the secondTestApp
 */
angular.module('secondTestApp')
  .controller('BuildCtrl', function ($scope,BuildList,BuildItem) {

    $scope.buildList = [];
     BuildList.getBuildsList().then(function(data){

       angular.forEach(data.data, function(value,key) {
         console.info(key);
         $scope.buildList.push( new BuildItem(value) );
         console.info(data.data[key].state);
       });

     });

  });
