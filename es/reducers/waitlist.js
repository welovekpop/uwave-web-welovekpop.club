import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import { WAITLIST_LOAD, WAITLIST_LOCK, WAITLIST_CLEAR, WAITLIST_UPDATE, WAITLIST_JOIN, WAITLIST_LEAVE } from '../constants/actionTypes/waitlist';
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
    case WAITLIST_LOAD:
      return _objectSpread({}, state, {
        waitlist: payload.waitlist,
        locked: payload.locked
      });

    case WAITLIST_LOCK:
      return _objectSpread({}, state, {
        locked: payload.locked
      });

    case WAITLIST_CLEAR:
      return _objectSpread({}, state, {
        waitlist: []
      });

    case WAITLIST_JOIN:
    case WAITLIST_LEAVE:
    case WAITLIST_UPDATE:
      return _objectSpread({}, state, {
        waitlist: payload.waitlist
      });

    default:
      return state;
  }
}
//# sourceMappingURL=waitlist.js.map
