"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEqualShallow = _interopRequireDefault(require("is-equal-shallow"));

var _SettingsActionCreators = require("../actions/SettingsActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SETTINGS_KEY = 'uwaveSettings';

var attempt = function attempt(fn) {
  try {
    return fn() || undefined;
  } catch (e) {
    return undefined;
  }
}; // [Store enhancer][1] that saves and loads app settings to and from
// localStorage.
//
// [1]: http://redux.js.org/docs/Glossary.html#store-enhancer


var persistSettings = function persistSettings(next) {
  return function (reducer, initialState) {
    var settings = attempt(function () {
      return JSON.parse(localStorage.getItem(SETTINGS_KEY));
    });
    var store = next(reducer, initialState);
    store.dispatch((0, _SettingsActionCreators.loadSettings)(settings));
    var prevSettings = settings;
    store.subscribe(function () {
      var newSettings = store.getState().settings;

      if (!(0, _isEqualShallow.default)(prevSettings, newSettings)) {
        attempt(function () {
          return localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
        });
      }

      prevSettings = newSettings;
    });
    return store;
  };
};

var _default = persistSettings; //# sourceMappingURL=persistSettings.js.map

exports.default = _default;
//# sourceMappingURL=persistSettings.js.map
