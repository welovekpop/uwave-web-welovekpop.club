"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preferredSessionType = preferredSessionType;
exports.set = set;
exports.unset = unset;
exports.get = get;

var _cookiesEnabled = _interopRequireDefault(require("@f/cookies-enabled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SESSION_KEY = '_session';

function preferredSessionType() {
  return typeof navigator !== 'undefined' && (0, _cookiesEnabled.default)() ? 'cookie' : 'token';
}

function set(key) {
  try {
    localStorage.setItem(SESSION_KEY, key);
  } catch (e) {// cookies disabled
  }
}

function unset() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {// cookies disabled
  }
}

function get() {
  try {
    return localStorage.getItem(SESSION_KEY);
  } catch (e) {// cookies disabled
  }

  return null;
}
//# sourceMappingURL=Session.js.map
