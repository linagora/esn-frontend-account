(function(angular) {
  'use strict';

  angular.module('linagora.esn.profile')
    .component('profileShowDetailsSubheader', {
      template: require("./profile-show-details-subheader.pug"),
      bindings: {
        showEditButton: '<'
      }
    });
})(angular);
