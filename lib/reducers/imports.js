'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _imports = require('../constants/actionTypes/imports');

var _playlists = require('../constants/actionTypes/playlists');

var _search = require('../constants/actionTypes/search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  showPanel: false,
  sourceType: null
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _imports.SHOW_IMPORT_PANEL:
      return (0, _extends3.default)({}, state, {
        showPanel: true
      });
    case _playlists.SELECT_PLAYLIST:
    case _search.SHOW_SEARCH_RESULTS:
      return (0, _extends3.default)({}, state, {
        showPanel: false
      });
    case _imports.SHOW_IMPORT_SOURCE_PANEL:
      return (0, _extends3.default)({}, state, {
        sourceType: payload.sourceType
      });
    case _imports.HIDE_IMPORT_SOURCE_PANEL:
      return (0, _extends3.default)({}, state, {
        sourceType: null
      });
    default:
      return state;
  }
}
//# sourceMappingURL=imports.js.map
//# sourceMappingURL=imports.js.map
