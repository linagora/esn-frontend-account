'use strict';

/**
 * Inject angular things globally, for use in frontend unit tests. Add your
 * instance names to the INJECTIONS array and don't forget to modify linter config
 */

angular.module('esn.test.injector', []).run(function($q) {
  window.$q = $q;
});

beforeEach(function() {
  window.$q = angular.injector(['ng']).get('$q');
  angular.mock.module('esn.test.injector');
});
