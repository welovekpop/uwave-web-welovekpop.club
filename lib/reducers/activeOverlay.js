"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _ActionTypes = require("../constants/ActionTypes");

var initialState = null;

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
    case _ActionTypes.OPEN_OVERLAY:
      return payload.overlay;

    case _ActionTypes.TOGGLE_OVERLAY:
      return state === payload.overlay ? null : payload.overlay;

    case _ActionTypes.CLOSE_OVERLAY:
      return null;

    default:
      return state;
  }
}
//# sourceMappingURL=activeOverlay.js.map
