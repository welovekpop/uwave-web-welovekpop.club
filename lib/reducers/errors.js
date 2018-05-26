"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

function reduce(state, action) {
  if (state === void 0) {
    state = [];
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload,
      error = _action.error;

  if (error) {
    // Avoid adding the same error over and over
    if (state.length === 0 || state[state.length - 1] !== payload.message) {
      return state.concat([payload.message]);
    }
  } else if (type === 'errors/DISMISS') {
    return state.slice(1);
  }

  return state;
}
//# sourceMappingURL=errors.js.map
