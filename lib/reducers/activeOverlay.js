'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _overlay = require('../constants/actionTypes/overlay');

var initialState = null;

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _overlay.OPEN_OVERLAY:
      return payload.overlay;
    case _overlay.TOGGLE_OVERLAY:
      return state === payload.overlay ? null : payload.overlay;
    case _overlay.CLOSE_OVERLAY:
      return null;
    default:
      return state;
  }
}
//# sourceMappingURL=activeOverlay.js.map
//# sourceMappingURL=activeOverlay.js.map
