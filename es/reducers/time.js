import _extends from 'babel-runtime/helpers/extends';
import { SET_TIMER, OFFSET } from '../constants/actionTypes/time';

var initialState = {
  timer: 0,
  offset: 0
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case SET_TIMER:
      return _extends({}, state, { timer: action.payload });
    case OFFSET:
      return _extends({}, state, { offset: action.payload });
    default:
      return state;
  }
}
//# sourceMappingURL=time.js.map
