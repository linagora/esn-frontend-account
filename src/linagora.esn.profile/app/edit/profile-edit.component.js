'use strict';

angular.module('linagora.esn.profile')
  .component('profileEdit', {
    template: require('./profile-edit.pug'),
    controller: 'profileEditController',
    bindings: {
      user: '<'
    }
  });
