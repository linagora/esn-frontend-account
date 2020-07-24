(function(angular) {
  'use strict';

  angular.module('linagora.esn.profile')

  .component('profileSidebarMenuItem', {
    bindings: {
      icon: '@',
      href: '@',
      label: '@'
    },
    template: require("./sidebar-menu-item.pug")
  });
})(angular);
