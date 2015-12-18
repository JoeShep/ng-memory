'use strict';

/**
 * @ngdoc function
 * @name MemoryGame.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the MemoryGame
 */
angular.module('MemoryGame')
  .controller('GameCtrl',
    [
      '$firebaseArray',
      'Ref',
      function ($soundsArray, Ref) {
        var soundsRef = Ref.child('sounds');
            // counter = 0;
            // matches = 0;

        this.cards = $soundsArray(soundsRef);
        this.matchCount = 0;
      }
    ]
  );
