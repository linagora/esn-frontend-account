angular.module('linagora.esn.controlcenter')

  .run(cacheTemplates);

function cacheTemplates($templateCache) {
  $templateCache.put('/controlcenter/app/sidebar/sidebar', require('./sidebar/sidebar.pug'));
}
