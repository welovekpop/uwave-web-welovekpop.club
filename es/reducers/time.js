import _extends from "@babel/runtime/helpers/builtin/extends";
import { SET_TIMER, OFFSET } from '../constants/actionTypes/time';
var initialState = {
  timer: 0,
  offset: 0
};
export default function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case SET_TIMER:
      return _extends({}, state, {
        timer: action.payload
      });

    case OFFSET:
      return _extends({}, state, {
        offset: action.payload
      });

    default:
      return state;
  }
}
//# sourceMappingURL=time.js.map
