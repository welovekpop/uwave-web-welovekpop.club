import _extends from 'babel-runtime/helpers/extends';
import { WAITLIST_LOAD, WAITLIST_LOCK, WAITLIST_CLEAR, WAITLIST_UPDATE, WAITLIST_JOIN, WAITLIST_LEAVE } from '../constants/actionTypes/waitlist';

var initialState = {
  waitlist: [],
  locked: false
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case WAITLIST_LOAD:
      return _extends({}, state, {
        waitlist: payload.waitlist,
        locked: payload.locked
      });
    case WAITLIST_LOCK:
      return _extends({}, state, {
        locked: payload.locked
      });
    case WAITLIST_CLEAR:
      return _extends({}, state, {
        waitlist: []
      });
    case WAITLIST_JOIN:
    case WAITLIST_LEAVE:
    case WAITLIST_UPDATE:
      return _extends({}, state, {
        waitlist: payload.waitlist
      });
    default:
      return state;
  }
}
//# sourceMappingURL=waitlist.js.map
