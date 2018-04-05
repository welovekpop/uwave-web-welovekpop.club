import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';

export var configSelector = function configSelector(state) {
  return state.config;
};

export var requestOptionsSelector = createSelector(configSelector, function (config) {
  var options = {};
  if (config.apiUrl) {
    options.apiUrl = config.apiUrl;
  }
  return options;
});

export var availableEmojiImagesSelector = createSelector(configSelector, function (config) {
  return config.emoji || {};
});

export var availableEmojiNamesSelector = createSelector(availableEmojiImagesSelector, function (emoji) {
  return Object.keys(emoji);
});

var reCaptchaSelector = createSelector(configSelector, function (config) {
  return config.recaptcha;
});

export var reCaptchaSiteKeySelector = createSelector(reCaptchaSelector, function (rc) {
  return rc ? rc.key : false;
});

export var rolesSelector = createSelector(configSelector, function (config) {
  return config.roles;
});

export var roleSelector = memoize(function (roleName) {
  return createSelector(rolesSelector, function (roles) {
    return roles[roleName];
  });
});

// TODO configurable.
export var roleColorsSelector = function roleColorsSelector() {
  return {
    admin: '#ff3b74',
    manager: '#05daa5',
    moderator: '#00b3dc',
    special: '#fc911d',
    default: ''
  };
};
//# sourceMappingURL=configSelectors.js.map
