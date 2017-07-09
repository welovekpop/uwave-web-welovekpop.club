'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPreviewMediaDialogOpenSelector = exports.previewMediaDialogSelector = exports.editMediaDialogSelector = exports.loginDialogSelector = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reselect = require('reselect');

var _configSelectors = require('./configSelectors');

var _settingSelectors = require('./settingSelectors');

var _userSelectors = require('./userSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseSelector = function baseSelector(state) {
  return state.dialogs;
};

var merge = function merge(dialog) {
  return (0, _extends3.default)({}, dialog.payload, { open: dialog.open });
};

var loginDialogSelector = exports.loginDialogSelector = (0, _reselect.createSelector)(baseSelector, _userSelectors.authErrorSelector, _configSelectors.reCaptchaSiteKeySelector, function (dialogs, error, siteKey) {
  return (0, _objectAssign2.default)(merge(dialogs.login), {
    error: error,
    useReCaptcha: !!siteKey,
    reCaptchaSiteKey: siteKey || null
  });
});

var editMediaDialogSelector = exports.editMediaDialogSelector = (0, _reselect.createSelector)(baseSelector, function (dialogs) {
  return merge(dialogs.editMedia);
});

var previewMediaDialogSelector = exports.previewMediaDialogSelector = (0, _reselect.createSelector)(baseSelector, _settingSelectors.volumeSelector, function (dialogs, volume) {
  return (0, _extends3.default)({}, merge(dialogs.previewMedia), {
    volume: volume
  });
});

var isPreviewMediaDialogOpenSelector = exports.isPreviewMediaDialogOpenSelector = (0, _reselect.createSelector)(baseSelector, function (dialogs) {
  return dialogs.previewMedia && !!dialogs.previewMedia.open;
});
//# sourceMappingURL=dialogSelectors.js.map
//# sourceMappingURL=dialogSelectors.js.map
