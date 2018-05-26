"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleColorsSelector = exports.roleSelector = exports.rolesSelector = exports.reCaptchaSiteKeySelector = exports.availableEmojiNamesSelector = exports.availableEmojiImagesSelector = exports.requestOptionsSelector = exports.configSelector = void 0;

var _reselect = require("reselect");

var _memoize = _interopRequireDefault(require("lodash/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configSelector = function configSelector(state) {
  return state.config;
};

exports.configSelector = configSelector;
var requestOptionsSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  var options = {};

  if (config.apiUrl) {
    options.apiUrl = config.apiUrl;
  }

  return options;
});
exports.requestOptionsSelector = requestOptionsSelector;
var availableEmojiImagesSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  return config.emoji || {};
});
exports.availableEmojiImagesSelector = availableEmojiImagesSelector;
var availableEmojiNamesSelector = (0, _reselect.createSelector)(availableEmojiImagesSelector, function (emoji) {
  return Object.keys(emoji);
});
exports.availableEmojiNamesSelector = availableEmojiNamesSelector;
var reCaptchaSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  return config.recaptcha;
});
var reCaptchaSiteKeySelector = (0, _reselect.createSelector)(reCaptchaSelector, function (rc) {
  return rc ? rc.key : false;
});
exports.reCaptchaSiteKeySelector = reCaptchaSiteKeySelector;
var rolesSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  return config.roles;
});
exports.rolesSelector = rolesSelector;
var roleSelector = (0, _memoize.default)(function (roleName) {
  return (0, _reselect.createSelector)(rolesSelector, function (roles) {
    return roles[roleName];
  });
}); // TODO configurable.

exports.roleSelector = roleSelector;

var roleColorsSelector = function roleColorsSelector() {
  return {
    admin: '#ff3b74',
    manager: '#05daa5',
    moderator: '#00b3dc',
    special: '#fc911d',
    default: ''
  };
};

exports.roleColorsSelector = roleColorsSelector;
//# sourceMappingURL=configSelectors.js.map
