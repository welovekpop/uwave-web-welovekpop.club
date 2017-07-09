import _extends from 'babel-runtime/helpers/extends';
import { RESET_PASSWORD_COMPLETE, REGISTER_COMPLETE, LOGIN_COMPLETE, SET_TOKEN, LOGOUT_COMPLETE } from '../constants/actionTypes/auth';
import { DO_CHANGE_USERNAME_COMPLETE } from '../constants/actionTypes/users';

var initialState = {
  jwt: null,
  user: null,
  error: null
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload,
      isError = action.error;

  switch (type) {
    case RESET_PASSWORD_COMPLETE:
      return isError ? _extends({}, state, {
        jwt: payload.jwt,
        user: null,
        error: payload
      }) : _extends({}, state, {
        jwt: payload.jwt,
        user: null,
        error: null
      });
    case SET_TOKEN:
      return _extends({}, state, {
        jwt: payload.jwt,
        user: null,
        error: null
      });
    case LOGIN_COMPLETE:
      return isError ? _extends({}, state, {
        jwt: null,
        user: null,
        error: payload
      }) : _extends({}, state, {
        jwt: payload.jwt,
        user: payload.user,
        error: null
      });
    case REGISTER_COMPLETE:
      return _extends({}, state, {
        jwt: null,
        user: null,
        error: payload
      });
    case LOGOUT_COMPLETE:
      return initialState;
    case DO_CHANGE_USERNAME_COMPLETE:
      if (!isError && state.user) {
        return _extends({}, state, {
          user: _extends({}, state.user, {
            username: payload.username
          })
        });
      }
      return state;
    default:
      return state;
  }
}
//# sourceMappingURL=auth.js.map
