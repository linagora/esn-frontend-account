angular.module('esnApp')
  .config(function config($urlRouterProvider) {
    $urlRouterProvider.otherwise(function () {
      return '/profile';
    });
  });
