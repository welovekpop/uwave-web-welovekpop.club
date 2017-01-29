/* global uw, __VERSION__ */
import Bugsnag from 'bugsnag-js';

/**
 * Bugsnag error reporting.
 */

Bugsnag.apiKey = 'a3246545081c8decaf0185c7a7f8d402';

Bugsnag.appVersion = __VERSION__;

/**
 * Add current user information.
 */
Bugsnag.beforeNotify = () => {
  const state = uw.store.getState();
  const user = state.auth && state.auth.user;
  if (user) {
    Bugsnag.user = {
      id: user._id,
      name: user.username
    };
  }
};
