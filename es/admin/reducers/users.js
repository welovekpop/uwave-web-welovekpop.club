import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import { SET_USERS_FILTER, LOAD_USERS_START, LOAD_USERS_COMPLETE } from '../constants/ActionTypes';
var initialState = {
  filter: null,
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  users: []
};
export default function reducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case SET_USERS_FILTER:
      return _objectSpread({}, state, {
        filter: action.payload.filter
      });

    case LOAD_USERS_START:
      return state;

    case LOAD_USERS_COMPLETE:
      return _objectSpread({}, state, {
        currentPage: action.payload.page,
        totalUsers: action.meta.results,
        totalPages: Math.ceil(action.meta.results / action.meta.pageSize),
        users: action.payload.users
      });

    default:
      return state;
  }
}
//# sourceMappingURL=users.js.map
