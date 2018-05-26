import _extends from "@babel/runtime/helpers/builtin/extends";
import { INIT_STATE, WAITLIST_LOAD, WAITLIST_LOCK, WAITLIST_CLEAR, WAITLIST_UPDATE, WAITLIST_JOIN, WAITLIST_LEAVE } from '../constants/ActionTypes';
var initialState = {
  waitlist: [],
  locked: false
};
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
      return _extends({}, state, {
        waitlist: payload.waitlist,
        locked: payload.waitlistLocked
      });

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
