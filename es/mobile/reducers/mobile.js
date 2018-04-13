import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { SET_DRAWER_OPEN, SET_USERS_DRAWER_OPEN, TOGGLE_DRAWER_OPEN } from '../constants/ActionTypes';
var initialState = {
  drawer: false,
  usersDrawer: false
};
export default function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case SET_DRAWER_OPEN:
      return _objectSpread({}, state, {
        drawer: action.payload
      });

    case SET_USERS_DRAWER_OPEN:
      return _objectSpread({}, state, {
        usersDrawer: action.payload
      });

    case TOGGLE_DRAWER_OPEN:
      return _objectSpread({}, state, {
        drawer: !state.drawer
      });

    default:
      return state;
  }
}
//# sourceMappingURL=mobile.js.map
