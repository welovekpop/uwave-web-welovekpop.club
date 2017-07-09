import { createSelector } from 'reselect';

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
//# sourceMappingURL=configSelectors.js.map
