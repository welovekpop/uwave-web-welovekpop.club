import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { LOAD_USERS_START, LOAD_USERS_COMPLETE } from '../constants/ActionTypes';
var initialState = {
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
    case LOAD_USERS_START:
      return state;

    case LOAD_USERS_COMPLETE:
      return _objectSpread({}, state, {
        currentPage: action.payload.page,
        totalUsers: action.meta.total,
        totalPages: Math.ceil(action.meta.total / action.meta.pageSize),
        users: action.payload.users
      });

    default:
      return state;
  }
}
//# sourceMappingURL=users.js.map
