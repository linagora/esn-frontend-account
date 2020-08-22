'use strict';

angular.module('linagora.esn.profile')
  .component('profileEditEmail', {
    template: require("./profile-edit-email.pug"),
    controller: 'ProfileEditEmailController',
    bindings: {
      user: '='
    }
  });
