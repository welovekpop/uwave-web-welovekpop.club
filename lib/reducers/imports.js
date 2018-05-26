"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  showPanel: false,
  sourceType: null
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
    case _ActionTypes.SHOW_IMPORT_PANEL:
      return (0, _extends2.default)({}, state, {
        showPanel: true
      });

    case _ActionTypes.SELECT_PLAYLIST:
    case _ActionTypes.SHOW_SEARCH_RESULTS:
      return (0, _extends2.default)({}, state, {
        showPanel: false
      });

    case _ActionTypes.SHOW_IMPORT_SOURCE_PANEL:
      return (0, _extends2.default)({}, state, {
        sourceType: payload.sourceType
      });

    case _ActionTypes.HIDE_IMPORT_SOURCE_PANEL:
      return (0, _extends2.default)({}, state, {
        sourceType: null
      });

    default:
      return state;
  }
}
//# sourceMappingURL=imports.js.map
