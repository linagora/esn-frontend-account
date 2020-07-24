(function(angular) {
  'use strict';

  angular.module('linagora.esn.profile')

    .run(function(dynamicDirectiveService, DynamicDirective, $templateCache) {
      var directive = new DynamicDirective(true, 'profile-menu-profile');

      dynamicDirectiveService.addInjection('profile-menu-profile', directive);

      $templateCache.put('/profile/app/sidebar/sidebar', require('../app/sidebar/sidebar.pug'));
    });

})(angular);
