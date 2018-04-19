import _extends from "@babel/runtime/helpers/builtin/extends";
import { INIT_STATE } from '../constants/actionTypes/auth';
var initialState = {};
export default function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;

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
