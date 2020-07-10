'use strict';

angular.module('linagora.esn.controlcenter')

  .directive('controlcenterApplicationMenu', function(applicationMenuTemplateBuilder) {
    return {
      retrict: 'E',
      replace: true,
      template: applicationMenuTemplateBuilder('/#/controlcenter', { url: '/controlcenter/images/control-center-icon.svg' }, 'Control Center')
    };
  })

  .directive('controlcenterMenuAccount', function(controlCenterMenuTemplateBuilder, CONTROL_CENTER_MENU_ACCOUNT) {
    const { href, icon, label } = CONTROL_CENTER_MENU_ACCOUNT;

    return {
      restrict: 'E',
      template: controlCenterMenuTemplateBuilder(href, icon, label)
    };
  });
