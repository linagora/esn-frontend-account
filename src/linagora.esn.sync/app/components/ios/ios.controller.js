'use strict';

const showdown = require('showdown');

require('../../services/mardown-renderer-service.js');

angular.module('linagora.esn.sync')

  .controller('syncIosController', function($scope, session, markdownRendererService) {
    $scope.user = {};
    const self = this;

    self.$onInit = $onInit;
    function $onInit() {
      const converter = new showdown.Converter();

      markdownRendererService.getDefaultLanguage().then(language => {
        const markdownFile = require(`!!html-loader!../../../i18n/guides/ios/${language}.md`);

        $scope.html = converter.makeHtml(markdownFile);
        $scope.newHTML = $scope.html.replaceAll('user.preferredEmail', session && session.user.preferredEmail);
      });
    }
  });

