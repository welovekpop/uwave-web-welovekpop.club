"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

var _LoadingStates = require("../constants/LoadingStates");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  sourceType: 'youtube',
  query: null,
  showResults: false,
  results: {},
  loadingState: _LoadingStates.IDLE
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
    case _ActionTypes.SHOW_SEARCH_RESULTS:
      return (0, _extends2.default)({}, state, {
        showResults: true
      });

    case _ActionTypes.SEARCH_START:
      return (0, _extends2.default)({}, state, {
        query: payload.query,
        results: {},
        loadingState: _LoadingStates.LOADING
      });

    case _ActionTypes.SEARCH_COMPLETE:
      return (0, _extends2.default)({}, state, {
        results: payload.results,
        loadingState: _LoadingStates.LOADED
      });

    case _ActionTypes.SET_SEARCH_SOURCE:
      return (0, _extends2.default)({}, state, {
        sourceType: payload.source
      });

    case _ActionTypes.SEARCH_DELETE:
      return (0, _extends2.default)({}, state, {
        query: null,
        loadingState: _LoadingStates.IDLE,
        results: {},
        showResults: false
      });

    case _ActionTypes.SELECT_PLAYLIST:
    case _ActionTypes.SHOW_IMPORT_PANEL:
      return (0, _extends2.default)({}, state, {
        showResults: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=mediaSearch.js.map
