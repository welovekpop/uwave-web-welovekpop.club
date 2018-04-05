import _extends from 'babel-runtime/helpers/extends';
import { SET_DRAWER_OPEN, SET_USERS_DRAWER_OPEN, TOGGLE_DRAWER_OPEN } from '../constants/ActionTypes';

var initialState = {
  drawer: false,
  usersDrawer: false
};

export default function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SET_DRAWER_OPEN:
      return _extends({}, state, {
        drawer: action.payload
      });
    case SET_USERS_DRAWER_OPEN:
      return _extends({}, state, {
        usersDrawer: action.payload
      });
    case TOGGLE_DRAWER_OPEN:
      return _extends({}, state, {
        drawer: !state.drawer
      });
    default:
      return state;
  }
}
//# sourceMappingURL=mobile.js.map
