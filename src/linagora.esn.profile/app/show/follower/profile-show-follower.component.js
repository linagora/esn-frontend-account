'use strict';

angular.module('linagora.esn.profile')
  .component('profileShowFollower', {
    template: require('./profile-show-follower.pug'),
    controller: 'profileShowFollowerController',
    bindings: {
      user: '<'
    }
  });
