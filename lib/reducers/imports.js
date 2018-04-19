"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _imports = require("../constants/actionTypes/imports");

var _playlists = require("../constants/actionTypes/playlists");

var _search = require("../constants/actionTypes/search");

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
    case _imports.SHOW_IMPORT_PANEL:
      return (0, _extends2.default)({}, state, {
        showPanel: true
      });

    case _playlists.SELECT_PLAYLIST:
    case _search.SHOW_SEARCH_RESULTS:
      return (0, _extends2.default)({}, state, {
        showPanel: false
      });

    case _imports.SHOW_IMPORT_SOURCE_PANEL:
      return (0, _extends2.default)({}, state, {
        sourceType: payload.sourceType
      });

    case _imports.HIDE_IMPORT_SOURCE_PANEL:
      return (0, _extends2.default)({}, state, {
        sourceType: null
      });

    default:
      return state;
  }
} //# sourceMappingURL=imports.js.map
//# sourceMappingURL=imports.js.map
