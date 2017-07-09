'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.unset = unset;
exports.get = get;
var SESSION_KEY = '_session';

function set(jwt) {
  try {
    localStorage.setItem(SESSION_KEY, jwt);
  } catch (e) {
    // cookies disabled
  }
}

function unset() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {
    // cookies disabled
  }
}

function get() {
  try {
    return localStorage.getItem(SESSION_KEY);
  } catch (e) {
    // cookies disabled
  }
  return null;
}
//# sourceMappingURL=Session.js.map
//# sourceMappingURL=Session.js.map
