'use strict';

/**
 * @ngdoc function
 * @name Audio
 * @description
 * # module and Controller for loading sounds
 */

angular.module('Audio', [
    'firebase',
    'firebase.ref',
  ])
  .controller('AudioCtrl',
    [
      '$scope',
      '$firebaseArray',
      'Ref',
      function ($scope, $soundsArray, Ref) {
        var soundsRef = Ref.child('sounds');
        $scope.soundsList = $soundsArray(soundsRef);
      }
    ]
  );
