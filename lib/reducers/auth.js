"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _auth = require("../constants/actionTypes/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  strategies: ['local'],
  token: null,
  user: null,
  error: null
};

function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload,
      isError = _action.error;

  switch (type) {
    case _auth.AUTH_STRATEGIES:
      return (0, _objectSpread2.default)({}, state, {
        strategies: payload.strategies
      });

    case _auth.RESET_PASSWORD_COMPLETE:
      return isError ? (0, _objectSpread2.default)({}, state, {
        token: payload.token,
        user: null,
        error: payload
      }) : (0, _objectSpread2.default)({}, state, {
        token: payload.token,
        user: null,
        error: null
      });

    case _auth.SET_TOKEN:
      return (0, _objectSpread2.default)({}, state, {
        token: payload.token,
        user: null,
        error: null
      });

    case _auth.LOGIN_COMPLETE:
      return isError ? (0, _objectSpread2.default)({}, state, {
        token: null,
        user: null,
        error: payload
      }) : (0, _objectSpread2.default)({}, state, {
        token: payload.token,
        user: payload.user._id,
        error: null
      });

    case _auth.REGISTER_COMPLETE:
      return (0, _objectSpread2.default)({}, state, {
        token: null,
        user: null,
        error: payload
      });

    case _auth.LOGOUT_COMPLETE:
      return initialState;

    default:
      return state;
  }
} //# sourceMappingURL=auth.js.map
//# sourceMappingURL=auth.js.map
