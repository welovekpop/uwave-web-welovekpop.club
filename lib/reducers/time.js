"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  timer: 0,
  offset: 0
};

function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case _ActionTypes.SET_TIMER:
      return (0, _extends2.default)({}, state, {
        timer: action.payload
      });

    case _ActionTypes.OFFSET:
      return (0, _extends2.default)({}, state, {
        offset: action.payload
      });

    default:
      return state;
  }
}
//# sourceMappingURL=time.js.map
