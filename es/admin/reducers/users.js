import _extends from 'babel-runtime/helpers/extends';
import { LOAD_USERS_START, LOAD_USERS_COMPLETE } from '../constants/ActionTypes';

var initialState = {
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  users: []
};

export default function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case LOAD_USERS_START:
      return state;
    case LOAD_USERS_COMPLETE:
      return _extends({}, state, {
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
