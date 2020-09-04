'use strict';

angular.module('linagora.esn.profile')
  .component('profileShowDetails', {
    template: require('./profile-show-details.pug'),
    controller: 'profileShowDetailsController',
    bindings: {
      user: '<'
    }
  });
