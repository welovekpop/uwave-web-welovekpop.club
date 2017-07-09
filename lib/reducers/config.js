"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;
var initialState = {};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;

  switch (type) {
    default:
      return state;
  }
}
//# sourceMappingURL=config.js.map
//# sourceMappingURL=config.js.map
