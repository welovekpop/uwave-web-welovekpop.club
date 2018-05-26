"use strict";

var _bugsnagJs = _interopRequireDefault(require("bugsnag-js"));

var _package = require("../../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window, uw */
var client = (0, _bugsnagJs.default)({
  apiKey: 'a3246545081c8decaf0185c7a7f8d402',
  appVersion: _package.version,

  /**
   * Add current user information.
   */
  beforeSend: function beforeSend(report) {
    var state = uw.store.getState();
    var user = state.auth && state.auth.user;

    if (user) {
      // eslint-disable-next-line no-param-reassign
      report.user = {
        id: user._id,
        name: user.username
      };
    }
  }
});
window.bugsnag = client;
//# sourceMappingURL=bugsnag.js.map
