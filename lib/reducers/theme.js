"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
function reduce(state, action) {
  if (state === void 0) {
    state = _theme.default;
  }

  if (action === void 0) {
    action = {};
  } // Nothing for now!


  return state;
}
//# sourceMappingURL=theme.js.map
