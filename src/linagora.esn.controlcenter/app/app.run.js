angular.module('linagora.esn.controlcenter')

  .run(function(dynamicDirectiveService, DynamicDirective) {
    var profileMenuControlcenter = new DynamicDirective(true, 'profile-menu-controlcenter');

    dynamicDirectiveService.addInjection('profile-menu-controlcenter', profileMenuControlcenter);
  })
  .run(cacheTemplates);

  function cacheTemplates($templateCache) {
    $templateCache.put('/controlcenter/app/sidebar/sidebar', require('../app/sidebar/sidebar.pug'));
  };
