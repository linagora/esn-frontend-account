require('esn-frontend-common-libs/src/frontend/js/modules/core.js');
require('esn-frontend-common-libs/src/frontend/components/dynamic-directive/src/dynamic-directive.js');
require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/profile.js');
require('esn-frontend-common-libs/src/frontend/js/modules/notification.js');
require('esn-frontend-common-libs/src/frontend/js/modules/timeline/timeline.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/previous-page.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');
require('esn-frontend-common-libs/src/frontend/js/modules/availability/availability.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user-configuration/user-configuration.module.js');

(function(angular) {
  'use strict';

  angular.module('linagora.esn.profile', [
    'esn.mailto-handler',
    'esn.core',
    'esn.configuration',
    'ui.router',
    'op.dynamicDirective',
    'esn.http',
    'esn.user',
    'esn.session',
    'esn.profile',
    'esn.notification',
    'esn.timeline',
    'esn.previous-page',
    'esn.i18n',
    'esn.async-action',
    'esn.availability',
    'esn.module-registry',
    'esn.user-configuration'
  ]);
})(angular);

require('./common/profile-api.service.js');
require('./common/profile-helpers.service.js');
require('./common/profile.controller.js');
require('./edit/email/profile-edit-emai.component.js');
require('./edit/email/profile-edit-email.controller.js');
require('./edit/form/profile-edit-form.component.js');
require('./edit/profile-edit.component.js');
require('./edit/profile-edit.controller.js');
require('./edit/subheader/profile-edit-subheader.component.js');
require('./profile-menu-profile/profile-menu-profile.component.js');
require('./show/details/profile-show-details.component.js');
require('./show/details/profile-show-details.controller.js');
require('./show/details/subheader/profile-show-details-subheader.component.js');
require('./show/follower/profile-show-follower.component.js');
require('./show/follower/profile-show-follower.controller.js');
require('./show/follower/subheader/profile-show-follower-subheader.component.js');
require('./show/following/profile-show-following.component.js');
require('./show/following/profile-show-following.controller.js');
require('./show/following/subheader/profile-show-following-subheader.component.js');
require('./show/overview/profile-overview.component.js');
require('./show/overview/profile-overview.controller.js');
require('./show/profile-show.component.js');
require('./show/tabs/profile-tabs.component.js');
require('./show/tabs/profile-tabs.controller.js');
require('./show/timeline/profile-show-timeline.component.js');
require('./show/timeline/subheader/profile-show-timeline-subheader.component.js');
require('./app.constants.js');
require('./app.registry.run.js');
require('./app.routes.js');
require('./app.run.js');
require('./app.config.js');

