import _extends from 'babel-runtime/helpers/extends';
import { INIT_STATE } from '../constants/actionTypes/auth';

var initialState = {};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case INIT_STATE:
      if (payload.roles) {
        return _extends({}, state, {
          roles: payload.roles
        });
      }
      return state;
    default:
      return state;
  }
}
//# sourceMappingURL=config.js.map
