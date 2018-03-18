'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _auth = require('../constants/actionTypes/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  strategies: ['local'],
  token: null,
  user: null,
  error: null
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload,
      isError = action.error;

  switch (type) {
    case _auth.AUTH_STRATEGIES:
      return (0, _extends3.default)({}, state, {
        strategies: payload.strategies
      });
    case _auth.RESET_PASSWORD_COMPLETE:
      return isError ? (0, _extends3.default)({}, state, {
        token: payload.token,
        user: null,
        error: payload
      }) : (0, _extends3.default)({}, state, {
        token: payload.token,
        user: null,
        error: null
      });
    case _auth.SET_TOKEN:
      return (0, _extends3.default)({}, state, {
        token: payload.token,
        user: null,
        error: null
      });
    case _auth.LOGIN_COMPLETE:
      return isError ? (0, _extends3.default)({}, state, {
        token: null,
        user: null,
        error: payload
      }) : (0, _extends3.default)({}, state, {
        token: payload.token,
        user: payload.user._id,
        error: null
      });
    case _auth.REGISTER_COMPLETE:
      return (0, _extends3.default)({}, state, {
        token: null,
        user: null,
        error: payload
      });
    case _auth.LOGOUT_COMPLETE:
      return initialState;
    default:
      return state;
  }
}
//# sourceMappingURL=auth.js.map
//# sourceMappingURL=auth.js.map
