"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  historyID: null,
  media: null,
  djID: null,
  startTime: null,
  isFullscreen: false
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
    case _ActionTypes.ADVANCE:
      if (payload) {
        return (0, _extends2.default)({}, state, {
          historyID: payload.historyID,
          media: payload.media,
          djID: payload.userID,
          startTime: payload.timestamp
        });
      }

      return (0, _extends2.default)({}, state, {
        historyID: null,
        media: null,
        djID: null,
        startTime: null
      });

    case _ActionTypes.ENTER_FULLSCREEN:
      return (0, _extends2.default)({}, state, {
        isFullscreen: true
      });

    case _ActionTypes.EXIT_FULLSCREEN:
      return (0, _extends2.default)({}, state, {
        isFullscreen: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=booth.js.map
