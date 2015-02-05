'use strict';

var app = angular.module('01HolaMundoApp');

var fnDirectiva = function() {
    var resultado = {};
    resultado.restrict = 'AEM';
    resultado.replace = 'true';
    resultado.template = '<p>&copy; Copyright 2015 - SGG</p>';

    return resultado;
};

app.directive('dirCreditos', fnDirectiva);

app.directive('dirColores', function() {
    var colorear = function(scope, elem) {
        // elem[0].style.backgroundColor = 'red';
        elem.css('background-color', 'red');
    };

    return {
        restrict    : 'AEM',
        link        : colorear
    };
});


app.directive('dirChange', function() {
    var $ = angular.element;
    var colors = ['#FFAA00', '#FFD300', '#531DFF', '#1A60FF', '#FFCF70', '#FFE670', '#9E80FF'];

    var replaceWithColors = function(element) {
        var originalText = element.text();
        var $newContent = $('<span>');
        for (var i=0; i < originalText.length; i++) {
            var colorIdx = i % colors.length;
            var char = originalText.charAt(i);
            $newContent.append(
                $('<span>').css('color', colors[colorIdx]).text(char)
            );
        }
        element.html($newContent);
    };

    return {
        restrict: 'AE',
        link : function(scope, element, attrs) {
            replaceWithColors(element);
        }
    };
});
