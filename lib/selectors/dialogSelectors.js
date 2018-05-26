"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPreviewMediaDialogOpenSelector = exports.previewMediaDialogSelector = exports.editMediaDialogSelector = exports.loginDialogSelector = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _reselect = require("reselect");

var _configSelectors = require("./configSelectors");

var _settingSelectors = require("./settingSelectors");

var _userSelectors = require("./userSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSelector = function baseSelector(state) {
  return state.dialogs;
};

var merge = function merge(dialog) {
  return (0, _extends2.default)({}, dialog.payload, {
    open: dialog.open
  });
};

var loginDialogSelector = (0, _reselect.createSelector)(baseSelector, _userSelectors.authErrorSelector, _configSelectors.reCaptchaSiteKeySelector, _userSelectors.supportsSocialAuthSelector, function (dialogs, error, siteKey, supportsSocialAuth) {
  return (0, _objectAssign.default)(merge(dialogs.login), {
    error: error,
    useReCaptcha: !!siteKey,
    reCaptchaSiteKey: siteKey || null,
    supportsSocialAuth: supportsSocialAuth
  });
});
exports.loginDialogSelector = loginDialogSelector;
var editMediaDialogSelector = (0, _reselect.createSelector)(baseSelector, function (dialogs) {
  return merge(dialogs.editMedia);
});
exports.editMediaDialogSelector = editMediaDialogSelector;
var previewMediaDialogSelector = (0, _reselect.createSelector)(baseSelector, _settingSelectors.volumeSelector, function (dialogs, volume) {
  return (0, _extends2.default)({}, merge(dialogs.previewMedia), {
    volume: volume
  });
});
exports.previewMediaDialogSelector = previewMediaDialogSelector;
var isPreviewMediaDialogOpenSelector = (0, _reselect.createSelector)(baseSelector, function (dialogs) {
  return dialogs.previewMedia && !!dialogs.previewMedia.open;
});
exports.isPreviewMediaDialogOpenSelector = isPreviewMediaDialogOpenSelector;
//# sourceMappingURL=dialogSelectors.js.map
