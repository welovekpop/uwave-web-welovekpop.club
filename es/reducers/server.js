import _extends from 'babel-runtime/helpers/extends';
import { SOCKET_CONNECTED, SOCKET_DISCONNECTED } from '../constants/ActionTypes';

var initialState = {
  connected: false
};

export default function serverReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;


  switch (type) {
    case SOCKET_CONNECTED:
      return _extends({}, state, { connected: true });
    case SOCKET_DISCONNECTED:
      return _extends({}, state, { connected: false });
    default:
      return state;
  }
}
//# sourceMappingURL=server.js.map
