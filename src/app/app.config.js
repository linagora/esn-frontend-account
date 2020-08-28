'use strict';

angular.module('esnApp')
  .config(function config($urlRouterProvider) {
    $urlRouterProvider.otherwise(function () {
      return '/profile';
    });
  })

  .config(function($stateProvider) {
    $stateProvider.state('logout', {
      url: '/logout',
      controller: 'logoutController'
    });
  });
