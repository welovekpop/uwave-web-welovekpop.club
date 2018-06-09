"use strict";

var _bugsnagJs = _interopRequireDefault(require("bugsnag-js"));

var _package = require("../../package.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window, uw */
var userId = null;

try {
  userId = localStorage.errorReportId;

  if (!userId) {
    userId = Math.random().toString(32).slice(2, 8);
    localStorage.errorReportId = userId;
  }
} catch (_unused) {
  userId = 'anonymous';
}

var client = (0, _bugsnagJs.default)({
  apiKey: 'a3246545081c8decaf0185c7a7f8d402',
  appVersion: _package.version,
  collectUserIp: false,

  /**
   * Add current user information.
   */
  beforeSend: function beforeSend(report) {
    report.user = {
      id: userId
    };
  }
});
window.bugsnag = client;
//# sourceMappingURL=bugsnag.js.map
