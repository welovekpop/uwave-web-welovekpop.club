import isEqual from 'is-equal-shallow';
import { loadSettings } from '../actions/SettingsActionCreators';

var SETTINGS_KEY = 'uwaveSettings';

var attempt = function attempt(fn) {
  try {
    return fn() || undefined;
  } catch (e) {
    return undefined;
  }
};

// [Store enhancer][1] that saves and loads app settings to and from
// localStorage.
//
// [1]: http://redux.js.org/docs/Glossary.html#store-enhancer
var persistSettings = function persistSettings(next) {
  return function (reducer, initialState) {
    var settings = attempt(function () {
      return JSON.parse(localStorage.getItem(SETTINGS_KEY));
    });

    var store = next(reducer, initialState);

    store.dispatch(loadSettings(settings));

    var prevSettings = settings;
    store.subscribe(function () {
      var newSettings = store.getState().settings;
      if (!isEqual(prevSettings, newSettings)) {
        attempt(function () {
          return localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
        });
      }
      prevSettings = newSettings;
    });
    return store;
  };
};

export default persistSettings;
//# sourceMappingURL=persistSettings.js.map
