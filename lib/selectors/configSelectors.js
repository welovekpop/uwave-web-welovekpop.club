'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleColorsSelector = exports.roleSelector = exports.rolesSelector = exports.reCaptchaSiteKeySelector = exports.availableEmojiNamesSelector = exports.availableEmojiImagesSelector = exports.requestOptionsSelector = exports.configSelector = undefined;

var _reselect = require('reselect');

var _memoize = require('lodash/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var rolesSelector = exports.rolesSelector = (0, _reselect.createSelector)(configSelector, function (config) {
  return config.roles;
});

var roleSelector = exports.roleSelector = (0, _memoize2.default)(function (roleName) {
  return (0, _reselect.createSelector)(rolesSelector, function (roles) {
    return roles[roleName];
  });
});

// TODO configurable.
var roleColorsSelector = exports.roleColorsSelector = function roleColorsSelector() {
  return {
    admin: '#ff3b74',
    manager: '#05daa5',
    moderator: '#00b3dc',
    special: '#fc911d',
    default: ''
  };
};
//# sourceMappingURL=configSelectors.js.map
//# sourceMappingURL=configSelectors.js.map
