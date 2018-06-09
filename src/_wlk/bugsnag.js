/* global window, uw */
import bugsnag from 'bugsnag-js';
import { version } from '../../package.json';

let userId = null;
try {
  userId = localStorage.errorReportId;
  if (!userId) {
    userId = Math.random().toString(32).slice(2, 8);
    localStorage.errorReportId = userId;
  }
} catch {
  userId = 'anonymous';
}

const client = bugsnag({
  apiKey: 'a3246545081c8decaf0185c7a7f8d402',
  appVersion: version,
  collectUserIp: false,

  /**
   * Add current user information.
   */
  beforeSend(report) {
    report.user = {
      id: userId,
    };
  },
});

window.bugsnag = client;
