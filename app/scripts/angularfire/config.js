angular.module('firebase.config', [])
  .constant('FBURL', 'https://ng-memory-game.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
