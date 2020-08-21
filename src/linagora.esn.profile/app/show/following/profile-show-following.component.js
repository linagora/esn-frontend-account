'use strict';

angular.module('linagora.esn.profile')
  .component('profileShowFollowing', {
    template: require("./profile-show-following.pug"),
    controller: 'profileShowFollowingController',
    bindings: {
      user: '<'
    }
  });
