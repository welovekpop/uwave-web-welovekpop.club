import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { SET_RESET_KEY, SET_RESET_SUCCESS } from './constants';
import _auth from '../reducers/auth';
export { _auth as auth };
import _config from '../reducers/config';
export { _config as config };
import _errors from '../reducers/errors';
export { _errors as errors };
import _theme from '../reducers/theme';
export { _theme as theme };
export function passwordReset(state, action) {
  if (state === void 0) {
    state = {};
  }

  if (action === void 0) {
    action = {};
  }

  if (action.error) return state;

  switch (action.type) {
    case SET_RESET_KEY:
      return _objectSpread({}, state, {
        key: action.payload
      });

    case SET_RESET_SUCCESS:
      return _objectSpread({}, state, {
        success: true
      });

    default:
      return state;
  }
}
//# sourceMappingURL=reducers.js.map
