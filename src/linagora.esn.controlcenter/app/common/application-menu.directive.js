require('./menu-template-builder.service.js');

(function(angular){
  'use strict';

  angular.module('linagora.esn.controlcenter')

  .directive('controlcenterMenuAccount', function(controlCenterMenuTemplateBuilder, CONTROL_CENTER_MENU_ACCOUNT) {
    const { href, icon, label } = CONTROL_CENTER_MENU_ACCOUNT;

    return {
      restrict: 'E',
      template: controlCenterMenuTemplateBuilder(href, icon, label)
    };
  });
})(angular);
