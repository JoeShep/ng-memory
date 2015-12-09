'use strict';
angular.module('MemoryGame')
  .directive('gameCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/_game_cards.html',
      link: function(scope, elem) {
        elem.bind('click', function() {
          console.log(elem);
          // vanilla JS method used in attempt to do this with no jQuery: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
          // var pic = elem.querySelector(".pic");
          // console.log("Pic", pic);
          elem.flip({
            direction:'rl',
            speed: 200,
            color: 'white',
            onEnd: function(){
              // if($('.flipped:eq(1)').length){
              //   // checkMatch();
              //   counter += 1;
              //   $('#flip-count').text(' ' + counter);
              // }
            }
          });
          // pic.removeClass("invisible");
        });
        elem.bind('mouseover', function() {
          elem.css('cursor', 'pointer');
        });
      }
    };
  }
);
