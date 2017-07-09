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

var _LoadingStates = require('../constants/LoadingStates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  sourceType: 'youtube',
  query: null,
  showResults: false,
  results: {},
  loadingState: _LoadingStates.IDLE
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _search.SHOW_SEARCH_RESULTS:
      return (0, _extends3.default)({}, state, {
        showResults: true
      });
    case _search.SEARCH_START:
      return (0, _extends3.default)({}, state, {
        query: payload.query,
        results: {},
        loadingState: _LoadingStates.LOADING
      });
    case _search.SEARCH_COMPLETE:
      return (0, _extends3.default)({}, state, {
        results: payload.results,
        loadingState: _LoadingStates.LOADED
      });
    case _search.SET_SEARCH_SOURCE:
      return (0, _extends3.default)({}, state, {
        sourceType: payload.source
      });
    case _playlists.SELECT_PLAYLIST:
    case _imports.SHOW_IMPORT_PANEL:
      return (0, _extends3.default)({}, state, {
        showResults: false
      });
    default:
      return state;
  }
}
//# sourceMappingURL=mediaSearch.js.map
//# sourceMappingURL=mediaSearch.js.map
