angular.module('esnApp', [
  'linagora.esn.profile',
  'linagora.esn.controlcenter',
  'ui.router',
  'esn.header',
  'esn.websocket',
  'esn.login',
  'esn.session',
  'esn.material'
])
  .config(function config($urlRouterProvider) {
    $urlRouterProvider.otherwise(function () {
      return '/profile';
    });
  });

require('esn-frontend-common-libs/src/frontend/js/modules/websocket');
require('esn-frontend-common-libs/src/frontend/js/modules/session');
require('esn-frontend-common-libs/src/frontend/js/modules/login');
require('esn-frontend-common-libs/src/frontend/js/modules/material/material.module');
require('./app.config');
require('./app.run');
require('../linagora.esn.controlcenter/app/app.module.js');
require('../linagora.esn.profile/app/app.module.js');
