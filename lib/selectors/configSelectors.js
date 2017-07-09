'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reCaptchaSiteKeySelector = exports.availableEmojiNamesSelector = exports.availableEmojiImagesSelector = exports.requestOptionsSelector = exports.configSelector = undefined;

var _reselect = require('reselect');

var configSelector = exports.configSelector = function configSelector(state) {
  return state.config;
};

var requestOptionsSelector = exports.requestOptionsSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  var options = {};
  if (config.apiUrl) {
    options.apiUrl = config.apiUrl;
  }
  return options;
});

var availableEmojiImagesSelector = exports.availableEmojiImagesSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  return config.emoji || {};
});

var availableEmojiNamesSelector = exports.availableEmojiNamesSelector = (0, _reselect.createSelector)(availableEmojiImagesSelector, function (emoji) {
  return Object.keys(emoji);
});

var reCaptchaSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  return config.recaptcha;
});

var reCaptchaSiteKeySelector = exports.reCaptchaSiteKeySelector = (0, _reselect.createSelector)(reCaptchaSelector, function (rc) {
  return rc ? rc.key : false;
});
//# sourceMappingURL=configSelectors.js.map
//# sourceMappingURL=configSelectors.js.map
