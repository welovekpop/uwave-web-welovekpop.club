"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _dialogs = require("../constants/actionTypes/dialogs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return (0, _extends3.default)({}, state, (_extends2 = {}, _extends2[name] = {
    open: open,
    payload: payload
  }, _extends2));
};

var closeDialog = function closeDialog(state, name) {
  return openDialog(state, name, {}, false);
};

function reduce(state, action) {
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
    case _dialogs.OPEN_EDIT_MEDIA_DIALOG:
      return openDialog(state, 'editMedia', payload);

    case _dialogs.CLOSE_EDIT_MEDIA_DIALOG:
      return closeDialog(state, 'editMedia');

    case _dialogs.OPEN_PREVIEW_MEDIA_DIALOG:
      return openDialog(state, 'previewMedia', payload);

    case _dialogs.CLOSE_PREVIEW_MEDIA_DIALOG:
      return closeDialog(state, 'previewMedia');

    case _dialogs.OPEN_LOGIN_DIALOG:
      return openDialog(state, 'login', payload);

    case _dialogs.CLOSE_LOGIN_DIALOG:
      return closeDialog(state, 'login');

    default:
      return state;
  }
} //# sourceMappingURL=dialogs.js.map
//# sourceMappingURL=dialogs.js.map
