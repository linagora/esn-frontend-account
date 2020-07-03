(function(angular) {
  'use strict';

  angular.module('linagora.esn.profile')
    .component('profileOverview', {
      template: require("./profile-overview.pug"),
      controller: 'profileOverviewController',
      bindings: {
        user: '<',
        me: '<',
        canEdit: '<'
      }
    });
})(angular);
