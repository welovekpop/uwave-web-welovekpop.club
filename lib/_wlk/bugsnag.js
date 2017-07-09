'use strict';

var _bugsnagJs = require('bugsnag-js');

var _bugsnagJs2 = _interopRequireDefault(_bugsnagJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Bugsnag error reporting.
 */

_bugsnagJs2.default.apiKey = 'a3246545081c8decaf0185c7a7f8d402'; /* global uw, __VERSION__ */


_bugsnagJs2.default.appVersion = __VERSION__;

/**
 * Add current user information.
 */
_bugsnagJs2.default.beforeNotify = function () {
  var state = uw.store.getState();
  var user = state.auth && state.auth.user;
  if (user) {
    _bugsnagJs2.default.user = {
      id: user._id,
      name: user.username
    };
  }
};
//# sourceMappingURL=bugsnag.js.map
//# sourceMappingURL=bugsnag.js.map
