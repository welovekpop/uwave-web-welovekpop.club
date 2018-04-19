import _extends from "@babel/runtime/helpers/builtin/extends";
import { LOAD_BANS_START, LOAD_BANS_COMPLETE } from '../constants/ActionTypes';
var initialState = {
  currentPage: {
    offset: 0,
    limit: 50
  },
  bans: []
};
export default function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  switch (action.type) {
    case LOAD_BANS_START:
      return state;

    case LOAD_BANS_COMPLETE:
      return _extends({}, state, {
        bans: action.payload.bans
      });

    default:
      return state;
  }
}
//# sourceMappingURL=bans.js.map
