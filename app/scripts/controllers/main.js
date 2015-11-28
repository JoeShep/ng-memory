'use strict';

/**
 * @ngdoc function
 * @name MemoryGame.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MemoryGame
 */
angular.module('MemoryGame')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
