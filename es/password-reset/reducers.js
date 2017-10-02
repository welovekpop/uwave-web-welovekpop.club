import _extends from 'babel-runtime/helpers/extends';
import { SET_RESET_KEY, SET_RESET_SUCCESS } from './constants';

import _auth from '../reducers/auth';
export { _auth as auth };
import _config from '../reducers/config';
export { _config as config };
import _errors from '../reducers/errors';
export { _errors as errors };
import _theme from '../reducers/theme';
export { _theme as theme };


export function passwordReset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.error) return state;

  switch (action.type) {
    case SET_RESET_KEY:
      return _extends({}, state, {
        key: action.payload
      });
    case SET_RESET_SUCCESS:
      return _extends({}, state, {
        success: true
      });

    default:
      return state;
  }
}
//# sourceMappingURL=reducers.js.map
