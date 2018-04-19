import _extends from "@babel/runtime/helpers/builtin/extends";
import { OPEN_EDIT_MEDIA_DIALOG, CLOSE_EDIT_MEDIA_DIALOG, OPEN_PREVIEW_MEDIA_DIALOG, CLOSE_PREVIEW_MEDIA_DIALOG, OPEN_LOGIN_DIALOG, CLOSE_LOGIN_DIALOG } from '../constants/actionTypes/dialogs';
var initialState = {
  editMedia: {
    open: false,
    payload: {}
  },
  previewMedia: {
    open: false,
    payload: {}
  },
  login: {
    open: false,
    payload: {}
  }
};

var openDialog = function openDialog(state, name, payload, open) {
  var _extends2;

  if (open === void 0) {
    open = true;
  }

  return _extends({}, state, (_extends2 = {}, _extends2[name] = {
    open: open,
    payload: payload
  }, _extends2));
};

var closeDialog = function closeDialog(state, name) {
  return openDialog(state, name, {}, false);
};

export default function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;

  switch (type) {
    case OPEN_EDIT_MEDIA_DIALOG:
      return openDialog(state, 'editMedia', payload);

    case CLOSE_EDIT_MEDIA_DIALOG:
      return closeDialog(state, 'editMedia');

    case OPEN_PREVIEW_MEDIA_DIALOG:
      return openDialog(state, 'previewMedia', payload);

    case CLOSE_PREVIEW_MEDIA_DIALOG:
      return closeDialog(state, 'previewMedia');

    case OPEN_LOGIN_DIALOG:
      return openDialog(state, 'login', payload);

    case CLOSE_LOGIN_DIALOG:
      return closeDialog(state, 'login');

    default:
      return state;
  }
}
//# sourceMappingURL=dialogs.js.map
