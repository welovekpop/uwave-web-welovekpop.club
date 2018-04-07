/* global window, uw */
import bugsnag from 'bugsnag-js';
import { version } from '../../package.json';

const client = bugsnag({
  apiKey: 'a3246545081c8decaf0185c7a7f8d402',
  appVersion: version,
  /**
   * Add current user information.
   */
  beforeSend(report) {
    const state = uw.store.getState();
    const user = state.auth && state.auth.user;
    if (user) {
      // eslint-disable-next-line no-param-reassign
      report.user = {
        id: user._id,
        name: user.username,
      };
    }
  },
});

window.bugsnag = client;
