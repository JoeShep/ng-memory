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
        // this.isVisible = false;

        this.flipCard = function(card) {
          console.log('clicked');
          this.isVisible = card;
        };

        this.isflipped = function(card) {
          console.log(this.isVisible !== card);
          return this.isVisible !== card;
        };
        // this.flipCard = function(){
        //   var target = event.currentTarget,
        //       pic = $(target).find('.pic'),
        //       tile = $(target).children('.tile');

        //   // Add back in once login is working:
        //   // || $('.play_btn').text() === 'play'
        //   if(tile.hasClass('matched') || $('.flipped').length === 2) {
        //     return;
        //   }

        //   if(!tile.hasClass('flipped') && $('.flipped').length < 2) {
        //     tile.flip({
        //       direction:'rl',
        //       speed: 200,
        //       color: 'white',
        //       onEnd: function(){
        //         if($('.flipped:eq(1)').length){
        //           // checkMatch();
        //           counter += 1;
        //           $('#flip-count').text(' ' + counter);
        //         }
        //       }
        //     }).addClass('flipped');
        //     pic.toggleClass('invisible');
        //   } else {
        //     pic.toggleClass('invisible');
        //     tile.removeClass('flipped').revertFlip();
        //   }
        // };
      }
    ]
  );
