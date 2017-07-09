'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationSettingsSelector = exports.settingsSelector = exports.videoSizeSelector = exports.languageSelector = exports.isMutedSelector = exports.volumeSelector = exports.muiThemeSelector = exports.themeSelector = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _arrayFind = require('array-find');

var _arrayFind2 = _interopRequireDefault(_arrayFind);

var _reselect = require('reselect');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _locale = require('../locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
function getAvailableLanguage(languages) {
  return (0, _arrayFind2.default)(languages, function (lang) {
    return _locale.availableLanguages.indexOf(lang) !== -1;
  });
}

function getDefaultLanguage() {
  if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.navigator && window.navigator.languages) {
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

var themeSelector = exports.themeSelector = function themeSelector(state) {
  return state.theme;
};

var muiThemeSelector = exports.muiThemeSelector = (0, _reselect.createSelector)(themeSelector, function (theme) {
  return (0, _getMuiTheme2.default)(theme);
});

var volumeSelector = exports.volumeSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.volume;
});

var isMutedSelector = exports.isMutedSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.muted;
});

var languageSelector = exports.languageSelector = (0, _reselect.createSelector)(settingsBaseSelector, getDefaultLanguage, function (settings, defaultLanguage) {
  return settings.language || defaultLanguage;
});

var videoSizeSelector = exports.videoSizeSelector = (0, _reselect.createSelector)(settingsBaseSelector, function (settings) {
  return settings.videoSize;
});

// Settings with selected values (from selectors above) rather than "saved"
// values (from localStorage).
var settingsSelector = exports.settingsSelector = (0, _reselect.createSelector)(settingsBaseSelector, volumeSelector, isMutedSelector, videoSizeSelector, languageSelector, function (base, volume, muted, videoSize, language) {
  return (0, _extends3.default)({}, base, {
    volume: volume,
    muted: muted,
    videoSize: videoSize,
    language: language
  });
});

var notificationSettingsSelector = exports.notificationSettingsSelector = (0, _reselect.createSelector)(settingsSelector, function (settings) {
  return settings.notifications;
});
//# sourceMappingURL=settingSelectors.js.map
//# sourceMappingURL=settingSelectors.js.map
