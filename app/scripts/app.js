'use strict';

/**
 * @ngdoc overview
 * @name 01HolaMundoApp
 * @description
 * # 01HolaMundoApp
 *
 * Main module of the application.
 */
var app = angular.module('01HolaMundoApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

var route = function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/donde', {
        templateUrl: 'views/donde.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

app.config(route);