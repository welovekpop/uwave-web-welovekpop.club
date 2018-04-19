import _extends from "@babel/runtime/helpers/builtin/extends";
import { AUTH_STRATEGIES, RESET_PASSWORD_COMPLETE, REGISTER_COMPLETE, LOGIN_COMPLETE, SET_TOKEN, LOGOUT_COMPLETE } from '../constants/actionTypes/auth';
var initialState = {
  strategies: ['local'],
  token: null,
  user: null,
  error: null
};
export default function reduce(state, action) {
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
    case AUTH_STRATEGIES:
      return _extends({}, state, {
        strategies: payload.strategies
      });

    case RESET_PASSWORD_COMPLETE:
      return isError ? _extends({}, state, {
        token: payload.token,
        user: null,
        error: payload
      }) : _extends({}, state, {
        token: payload.token,
        user: null,
        error: null
      });

    case SET_TOKEN:
      return _extends({}, state, {
        token: payload.token,
        user: null,
        error: null
      });

    case LOGIN_COMPLETE:
      return isError ? _extends({}, state, {
        token: null,
        user: null,
        error: payload
      }) : _extends({}, state, {
        token: payload.token,
        user: payload.user._id,
        error: null
      });

    case REGISTER_COMPLETE:
      return _extends({}, state, {
        token: null,
        user: null,
        error: payload
      });

    case LOGOUT_COMPLETE:
      return initialState;

    default:
      return state;
  }
}
//# sourceMappingURL=auth.js.map
