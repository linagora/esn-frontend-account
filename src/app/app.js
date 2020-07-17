angular.module('esnApp', [
  'linagora.esn.profile',
  'linagora.esn.controlcenter',
  'ui.router',
  'esn.header',
  'esn.websocket',
  'esn.session'
])
  .config(function config($urlRouterProvider) {
    $urlRouterProvider.otherwise(function () {
      return '/profile';
    });
  });


require('esn-frontend-common-libs/src/frontend/js/modules/websocket');
require('esn-frontend-common-libs/src/frontend/js/modules/session');
require('./app.config');
require('./app.run');
