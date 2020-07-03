(function(angular) {
  'use strict';

  angular.module('linagora.esn.controlcenter')

  .component('controlcenterSidebarMenuItem', {
    bindings: {
      icon: '@',
      href: '@',
      label: '@'
    },
    template: require("./sidebar-menu-item.pug")
  });
})(angular);
