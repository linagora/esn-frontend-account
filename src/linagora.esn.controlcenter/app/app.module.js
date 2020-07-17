require('esn-frontend-common-libs/src/frontend/js/constants.js');
require('esn-frontend-common-libs/src/frontend/js/modules/header/header.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/sidebar.js');
require('esn-frontend-common-libs/src/frontend/js/modules/module-registry/module-registry.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user-configuration/user-configuration.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/business-hours/business-hours.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/home-page/home-page.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/application-menu.js');

(function(angular) {
  'use strict';

  angular.module('linagora.esn.controlcenter', [
    'op.dynamicDirective',
    'esn.constants',
    'esn.user',
    'esn.subheader',
    'esn.sidebar',
    'esn.module-registry',
    'esn.user-configuration',
    'esn.business-hours',
    'esn.configuration',
    'esn.i18n',
    'esn.home-page',
    'esn.application-menu'
  ]);

})(angular);

require('./application-menu-home/application-menu-home.directive.js');
require('./common/application-menu.directive.js');
require('./common/menu-template-builder.service.js');
require('./general/controlcenter-general.component.js');
require('./general/controlcenter-general.constants.js');
require('./general/controlcenter-general.controller.js');
require('./general/subheader/subheader.js');
require('./profile-menu-controlcenter/profile-menu-controlcenter.component.js');
require('./sidebar/sidebar-menu-item.component.js');
require('./sidebar/sidebar.component.js');
require('./app.route.js');
require('./app.run.js');
