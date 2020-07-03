(function(angular) {
  'use strict';

  angular.module('linagora.esn.profile')
    .component('profileEditForm', {
      template: require("./profile-edit-form.pug"),
      bindings: {
        user: '=',
        canEditEmails: '<',
        provisionedFields: '<'
      }
    });
})(angular);
