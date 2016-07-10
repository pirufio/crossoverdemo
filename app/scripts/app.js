'use strict';

/**
 * @ngdoc overview
 * @name secondTestApp
 * @description
 * # secondTestApp
 *
 * Main module of the application.
 */
angular
  .module('secondTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/build.html',
        controller: 'BuildCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
