'use strict';

angular.module('linagora.esn.sync')
  .factory('markdownRendererService', markdownRendererService);

function markdownRendererService(esnConfig, session, esnUserConfigurationService) {
  return {
    getDefaultLanguage,
    getUserConfigurations
  };

  function getUserConfigurations() {

    const userId = session.user._id;

    return esnUserConfigurationService.get(['autoconf'], 'core', userId)
      .then(function(configurations) {
        return configurations;
      })
      .catch(function(err) {
        return err;
      });
  }

  function getDefaultLanguage() {
    return esnConfig('core.language')
      .then(function(language) {
        return language;
      })
      .catch(function(err) {
        return err;
      });
  }
}
