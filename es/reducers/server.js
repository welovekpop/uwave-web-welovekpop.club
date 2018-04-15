import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
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
      return _objectSpread({}, state, {
        connected: true
      });

    case SOCKET_DISCONNECTED:
      return _objectSpread({}, state, {
        connected: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=server.js.map
