import _extends from 'babel-runtime/helpers/extends';
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

var openDialog = function openDialog(state, name, payload) {
  var _extends2;

  var open = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return _extends({}, state, (_extends2 = {}, _extends2[name] = {
    open: open,
    payload: payload
  }, _extends2));
};
var closeDialog = function closeDialog(state, name) {
  return openDialog(state, name, {}, false);
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

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
