angular.module('MemoryGame')
  .directive('gameCard', function($window) {
    'use strict';

    function checkMatch(cards) {
      console.log('There are two flipped cards', cards);
      var card1 = cards[0].id,
          card2 = cards[1].id;

      if( card1 === card2) {
        console.log('match!');
        cards = [].slice.call(cards);
        cards.forEach(function(card) {
          setTimeout( function() {
            angular.element(card).addClass('matched')
          },1000 );
        });
      } else {
        console.log('no match');
      }
    }
    return {
      restrict: 'E',
      templateUrl: 'views/partials/_game_cards.html',
      link: function(scope, elem) {
        elem.bind('click', function() {
          var card = angular.element(elem[0].children[0].children[0]);
          if ( angular.element(card).hasClass('matched') ) {
            return;
          }
          var flippedCards = $window.document.getElementsByClassName('flipped');
          var matchedCards = $window.document.getElementsByClassName('matched');

          if (
              !card.hasClass('flipped') && flippedCards.length < 2 ) {
            angular.element(card).addClass('flipped');
            console.log('after adding class', flippedCards.length);
            if ( flippedCards.length === 2 ) {
              checkMatch(flippedCards);
            }
          } else {
            angular.element(card).removeClass('flipped');
          }
        });
      elem.bind('mouseover', function() {
          elem.css('cursor', 'pointer');
      });
    }
   };
  }
);
