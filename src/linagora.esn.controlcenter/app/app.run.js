'use strict';

angular.module('linagora.esn.controlcenter')

  .run(function(dynamicDirectiveService, DynamicDirective) {
    var profileMenuControlcenter = new DynamicDirective(true, 'profile-menu-controlcenter');

    dynamicDirectiveService.addInjection('profile-menu-controlcenter', profileMenuControlcenter);
  });
