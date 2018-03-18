import _extends from 'babel-runtime/helpers/extends';
import { LOAD_BANS_START, LOAD_BANS_COMPLETE } from '../constants/ActionTypes';

var initialState = {
  currentPage: {
    offset: 0,
    limit: 50
  },
  bans: []
};

export default function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
