import _extends from 'babel-runtime/helpers/extends';
import except from 'except';
import indexBy from 'index-by';
import { combineReducers } from 'redux';

import { INIT_STATE } from '../constants/actionTypes/auth';
import { LOAD_ONLINE_USERS, USER_JOIN, USER_LEAVE, CHANGE_USERNAME, USER_ADD_ROLES, USER_REMOVE_ROLES, RECEIVE_GUEST_COUNT } from '../constants/actionTypes/users';

function updateUser(state, userID, update) {
  if (state[userID]) {
    var _extends2;

    return _extends({}, state, (_extends2 = {}, _extends2[userID] = update(state[userID]), _extends2));
  }
  return state;
}

function guestsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.type === INIT_STATE) {
    return action.payload.guests;
  }
  if (action.type === RECEIVE_GUEST_COUNT) {
    return action.payload.guests;
  }
  return state;
}

function usersReducer() {
  var _extends3;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case LOAD_ONLINE_USERS:
      // this is merged in instead of replacing the state, because sometimes the
      // JOIN event from the current user comes in before the LOAD event, and then
      // the current user is sometimes excluded from the state. it looks like this
      // approach could cause problems, too, though.
      // TODO maybe replace state instead anyway and merge in the current user?
      return _extends({}, state, indexBy(payload.users, '_id'));
    case USER_JOIN:
      return _extends({}, state, (_extends3 = {}, _extends3[payload.user._id] = payload.user, _extends3));
    case USER_LEAVE:
      return except(state, payload.userID);
    case CHANGE_USERNAME:
      return updateUser(state, payload.userID, function (user) {
        return _extends({}, user, {
          username: payload.username
        });
      });
    case USER_ADD_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return _extends({}, user, {
          roles: [].concat(user.roles, payload.roles)
        });
      });
    case USER_REMOVE_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return _extends({}, user, {
          roles: user.roles.filter(function (role) {
            return payload.roles.indexOf(role) === -1;
          })
        });
      });
    default:
      return state;
  }
}

var reduce = combineReducers({
  guests: guestsReducer,
  users: usersReducer
});

export default reduce;
//# sourceMappingURL=users.js.map
