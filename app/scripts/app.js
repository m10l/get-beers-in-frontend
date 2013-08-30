'use strict';

angular.module('getBeersInV2App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/drinkers', {
        templateUrl: 'views/drinkers.html',
        controller: 'DrinkersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
