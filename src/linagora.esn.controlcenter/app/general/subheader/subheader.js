'use strict';

angular.module('linagora.esn.controlcenter')

  .component('controlcenterGeneralSubheader', {
    template: require('./subheader.pug'),
    bindings: {
      onFormSubmit: '&',
      form: '<'
    }
  });
