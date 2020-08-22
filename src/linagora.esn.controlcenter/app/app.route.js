'use strict';

angular.module('linagora.esn.controlcenter')

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/controlcenter', '/controlcenter/general');

    $stateProvider
      .state('controlcenter', {
        url: '/controlcenter',
        template: require("./app.pug")
      })
      .state('controlcenter.general', {
        url: '/general',
        views: {
          'root@controlcenter': {
            template: '<controlcenter-general />'
          }
        }
      });
  });
