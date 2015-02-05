'use strict';

/**
 * @ngdoc function
 * @name 01HolaMundoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 01HolaMundoApp
 */
angular.module('01HolaMundoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
