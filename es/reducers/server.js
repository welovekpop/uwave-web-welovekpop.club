import _extends from "@babel/runtime/helpers/builtin/extends";
import { SOCKET_CONNECTED, SOCKET_DISCONNECTED } from '../constants/ActionTypes';
var initialState = {
  connected: false
};
export default function serverReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type;

  switch (type) {
    case SOCKET_CONNECTED:
      return _extends({}, state, {
        connected: true
      });

    case SOCKET_DISCONNECTED:
      return _extends({}, state, {
        connected: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=server.js.map
