'use strict';

/**
 * @ngdoc function
 * @name 01HolaMundoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 01HolaMundoApp
 */

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(valor) { };
}

/**
 * Prueba de commit.
 */

angular.module('01HolaMundoApp')
  .controller('MainCtrl', ['$scope', function (scope) {
    this.borrarElemento = function (dato) {
        var index = this.awesomeThings.indexOf(dato);
        this.awesomeThings.splice(index, 1);
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Café'
    ];
    scope.mensaje = 'Gracias por participar.';
  }]);
