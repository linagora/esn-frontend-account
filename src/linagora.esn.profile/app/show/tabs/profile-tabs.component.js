'use strict';

angular.module('linagora.esn.profile')
  .component('profileTabs', {
    template: require('./profile-tabs.pug'),
    controller: 'profileTabsController',
    bindings: {
      user: '<',
      me: '<',
      canEdit: '<'
    }
  });
