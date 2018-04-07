/* global window, uw */
import bugsnag from 'bugsnag-js';
import { version } from '../../package.json';

var client = bugsnag({
  apiKey: 'a3246545081c8decaf0185c7a7f8d402',
  appVersion: version,
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
