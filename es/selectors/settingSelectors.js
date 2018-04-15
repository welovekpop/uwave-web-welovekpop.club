import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";

/* global window */
import find from 'array-find';
import { createSelector } from 'reselect';
import { createMuiTheme } from "material-ui/es/styles";
import { availableLanguages } from '../locale';

function getAvailableLanguage(languages) {
  return find(languages, function (lang) {
    return availableLanguages.indexOf(lang) !== -1;
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

export var themeSelector = createSelector(function (state) {
  return state.theme;
}, function (base) {
  return createMuiTheme(base);
});
export var volumeSelector = createSelector(settingsBaseSelector, function (settings) {
  return settings.volume;
});
export var isMutedSelector = createSelector(settingsBaseSelector, function (settings) {
  return settings.muted;
});
export var languageSelector = createSelector(settingsBaseSelector, getDefaultLanguage, function (settings, defaultLanguage) {
  return settings.language || defaultLanguage;
});
export var videoSizeSelector = createSelector(settingsBaseSelector, function (settings) {
  return settings.videoSize;
});
export var videoEnabledSelector = createSelector(settingsBaseSelector, function (settings) {
  return settings.videoEnabled;
}); // Settings with selected values (from selectors above) rather than "saved"
// values (from localStorage).

export var settingsSelector = createSelector(settingsBaseSelector, volumeSelector, isMutedSelector, videoSizeSelector, languageSelector, function (base, volume, muted, videoSize, language) {
  return _objectSpread({}, base, {
    volume: volume,
    muted: muted,
    videoSize: videoSize,
    language: language
  });
});
export var notificationSettingsSelector = createSelector(settingsSelector, function (settings) {
  return settings.notifications;
});
//# sourceMappingURL=settingSelectors.js.map
