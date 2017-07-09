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
Bugsnag.beforeNotify = function () {
  var state = uw.store.getState();
  var user = state.auth && state.auth.user;
  if (user) {
    Bugsnag.user = {
      id: user._id,
      name: user.username
    };
  }
};
//# sourceMappingURL=bugsnag.js.map
