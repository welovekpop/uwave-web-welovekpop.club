'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload,
      error = action.error;

  if (error) {
    // Avoid adding the same error over and over
    if (state.length === 0 || state[state.length - 1] !== payload.message) {
      return [].concat(state, [payload.message]);
    }
  } else if (type === 'errors/DISMISS') {
    return state.slice(1);
  }
  return state;
}
//# sourceMappingURL=errors.js.map
//# sourceMappingURL=errors.js.map
