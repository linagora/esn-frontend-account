'use strict';

angular.module('linagora.esn.profile')
  .component('profileEditSubheader', {
    template: require('./profile-edit-subheader.pug'),
    bindings: {
      onSaveBtnClick: '&',
      form: '<'
    }
  });
