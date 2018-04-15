"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _time = require("../constants/actionTypes/time");

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
    case _time.SET_TIMER:
      return (0, _objectSpread2.default)({}, state, {
        timer: action.payload
      });

    case _time.OFFSET:
      return (0, _objectSpread2.default)({}, state, {
        offset: action.payload
      });

    default:
      return state;
  }
} //# sourceMappingURL=time.js.map
//# sourceMappingURL=time.js.map
