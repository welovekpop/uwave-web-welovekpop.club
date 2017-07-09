'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _booth = require('../constants/actionTypes/booth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  historyID: null,
  media: null,
  djID: null,
  startTime: null,
  isFullscreen: false
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _booth.ADVANCE:
      if (payload) {
        return (0, _extends3.default)({}, state, {
          historyID: payload.historyID,
          media: payload.media,
          djID: payload.userID,
          startTime: payload.timestamp
        });
      }
      return (0, _extends3.default)({}, state, {
        historyID: null,
        media: null,
        djID: null,
        startTime: null
      });
    case _booth.ENTER_FULLSCREEN:
      return (0, _extends3.default)({}, state, {
        isFullscreen: true
      });
    case _booth.EXIT_FULLSCREEN:
      return (0, _extends3.default)({}, state, {
        isFullscreen: false
      });
    default:
      return state;
  }
}
//# sourceMappingURL=booth.js.map
//# sourceMappingURL=booth.js.map
