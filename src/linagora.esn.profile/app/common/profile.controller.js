'use strict';

require('./profile-helpers.service.js');

angular.module('linagora.esn.profile')
  .controller('profileController', profileController);

function profileController($scope, profileHelpersService, user) {
  $scope.user = user;
  $scope.me = profileHelpersService.isMe(user);
  $scope.canEdit = profileHelpersService.canEdit(user);
}
