import _extends from 'babel-runtime/helpers/extends';
import assign from 'object-assign';
import { createSelector } from 'reselect';
import { reCaptchaSiteKeySelector } from './configSelectors';
import { volumeSelector } from './settingSelectors';
import { authErrorSelector, supportsSocialAuthSelector } from './userSelectors';

var baseSelector = function baseSelector(state) {
  return state.dialogs;
};

var merge = function merge(dialog) {
  return _extends({}, dialog.payload, { open: dialog.open });
};

export var loginDialogSelector = createSelector(baseSelector, authErrorSelector, reCaptchaSiteKeySelector, supportsSocialAuthSelector, function (dialogs, error, siteKey, supportsSocialAuth) {
  return assign(merge(dialogs.login), {
    error: error,
    useReCaptcha: !!siteKey,
    reCaptchaSiteKey: siteKey || null,
    supportsSocialAuth: supportsSocialAuth
  });
});

export var editMediaDialogSelector = createSelector(baseSelector, function (dialogs) {
  return merge(dialogs.editMedia);
});

export var previewMediaDialogSelector = createSelector(baseSelector, volumeSelector, function (dialogs, volume) {
  return _extends({}, merge(dialogs.previewMedia), {
    volume: volume
  });
});

export var isPreviewMediaDialogOpenSelector = createSelector(baseSelector, function (dialogs) {
  return dialogs.previewMedia && !!dialogs.previewMedia.open;
});
//# sourceMappingURL=dialogSelectors.js.map
