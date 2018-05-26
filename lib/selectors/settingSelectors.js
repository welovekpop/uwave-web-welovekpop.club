"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationSettingsSelector = exports.settingsSelector = exports.videoEnabledSelector = exports.videoSizeSelector = exports.languageSelector = exports.isMutedSelector = exports.volumeSelector = exports.themeSelector = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _arrayFind = _interopRequireDefault(require("array-find"));

var _reselect = require("reselect");

var _styles = require("@material-ui/core/styles");

var _locale = require("../locale");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
function getAvailableLanguage(languages) {
  return (0, _arrayFind.default)(languages, function (lang) {
    return _locale.availableLanguages.indexOf(lang) !== -1;
  });
}

function getDefaultLanguage() {
  if (typeof window === 'object' && window.navigator && window.navigator.languages) {
    var browserLanguage = getAvailableLanguage(window.navigator.languages);

    if (browserLanguage) {
      return browserLanguage;
    }
  }

  return 'en';
}

var settingsBaseSelector = function settingsBaseSelector(state) {
  return state.settings;
};

var themeSelector = (0, _reselect.createSelector)(function (state) {
  return state.theme;
}, function (base) {
  return (0, _styles.createMuiTheme)(base);
});
exports.themeSelector = themeSelector;
var volumeSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.volume;
});
exports.volumeSelector = volumeSelector;
var isMutedSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.muted;
});
exports.isMutedSelector = isMutedSelector;
var languageSelector = (0, _reselect.createSelector)(settingsBaseSelector, getDefaultLanguage, function (settings, defaultLanguage) {
  return settings.language || defaultLanguage;
});
exports.languageSelector = languageSelector;
var videoSizeSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.videoSize;
});
exports.videoSizeSelector = videoSizeSelector;
var videoEnabledSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.videoEnabled;
}); // Settings with selected values (from selectors above) rather than "saved"
// values (from localStorage).

exports.videoEnabledSelector = videoEnabledSelector;
var settingsSelector = (0, _reselect.createSelector)(settingsBaseSelector, volumeSelector, isMutedSelector, videoSizeSelector, languageSelector, function (base, volume, muted, videoSize, language) {
  return (0, _extends2.default)({}, base, {
    volume: volume,
    muted: muted,
    videoSize: videoSize,
    language: language
  });
});
exports.settingsSelector = settingsSelector;
var notificationSettingsSelector = (0, _reselect.createSelector)(settingsSelector, function (settings) {
  return settings.notifications;
});
exports.notificationSettingsSelector = notificationSettingsSelector;
//# sourceMappingURL=settingSelectors.js.map
