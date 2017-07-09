'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _time = require('../constants/actionTypes/time');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  timer: 0,
  offset: 0
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _time.SET_TIMER:
      return (0, _extends3.default)({}, state, { timer: action.payload });
    case _time.OFFSET:
      return (0, _extends3.default)({}, state, { offset: action.payload });
    default:
      return state;
  }
}
//# sourceMappingURL=time.js.map
//# sourceMappingURL=time.js.map
