"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wlkReducer;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  shouldRandomize: false
};

function wlkReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case _constants.SHOULD_RANDOMIZE:
      return (0, _extends2.default)({}, state, {
        shouldRandomize: action.payload
      });

    default:
      return state;
  }
}
//# sourceMappingURL=reducer.js.map
