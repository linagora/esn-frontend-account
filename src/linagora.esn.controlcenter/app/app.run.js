(function(angular) {
  'use strict';

  angular.module('linagora.esn.controlcenter')

    .run(function(dynamicDirectiveService, DynamicDirective, $templateCache) {
      var profileMenuControlcenter = new DynamicDirective(true, 'profile-menu-controlcenter');
      var applicationMenuHome = new dynamicDirectiveService.DynamicDirective(true, 'application-menu-home', { priority: 50 });

      dynamicDirectiveService.addInjection('profile-menu-controlcenter', profileMenuControlcenter);
      dynamicDirectiveService.addInjection('esn-application-menu', applicationMenuHome);

      $templateCache.put('/controlcenter/app/sidebar/sidebar', require('../app/sidebar/sidebar.pug'));
    });

})(angular);
