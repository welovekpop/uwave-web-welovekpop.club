/* global window, uw */
import bugsnag from 'bugsnag-js';
import { version } from '../../package.json';
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

var client = bugsnag({
  apiKey: 'a3246545081c8decaf0185c7a7f8d402',
  appVersion: version,
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
