window.jstz = require('esn-frontend-common-libs/src/frontend/components/jstzdetect/jstz.js');
window.jQuery = require('jquery/dist/jquery.js');
window.$ = window.jQuery;
require('esn-frontend-common-libs/src/frontend/vendor-libs.js');
require('angular-strap/dist/angular-strap.js');
require('angular-animate/angular-animate.js');
require('angular-messages/angular-messages.js');
require('angular-feature-flags/dist/featureFlags.js');
require('angular-ui-router/release/angular-ui-router.js');
require('angular-material/angular-material.js');
require('matchmedia-ng/matchmedia-ng.js');
require('bootstrap/dist/js/bootstrap.js');
require('angular-promise-extras/angular-promise-extras.js');
require('angular-touch/angular-touch.js');
require('ng-tags-input/build/ng-tags-input.js');
require('async/dist/async.js');
require('esn-frontend-mailto-handler/src/index.js');
require('esn-frontend-account-inbox/src/index.js');
require('angular-mocks/angular-mocks.js');

require('./app/app.js');

require('../test/config/mocks/injector.js');
require('../test/config/mocks/modules.js');
require('../test/config/mocks/ng-mock-component.js');
require('../test/config/mocks/reset-dynamic-directive-injections.js');

const sinonChai = require('sinon-chai/lib/sinon-chai.js');
const shallowDeepEqual = require('chai-shallow-deep-equal/chai-shallow-deep-equal.js');
const chaiDatetime = require('chai-datetime/chai-datetime.js');
chai.use(sinonChai);
chai.use(shallowDeepEqual);
chai.use(chaiDatetime);

// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('.', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
