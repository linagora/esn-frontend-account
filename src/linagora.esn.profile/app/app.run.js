angular.module('linagora.esn.profile')

  .run(cacheTemplates);

function cacheTemplates($templateCache) {
  $templateCache.put('/profile/app/sidebar/sidebar', require('./sidebar/sidebar.pug'));
}
