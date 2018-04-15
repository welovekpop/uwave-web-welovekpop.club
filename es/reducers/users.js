import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import except from 'except';
import indexBy from 'index-by';
import { combineReducers } from 'redux';
import { INIT_STATE } from '../constants/actionTypes/auth';
import { LOAD_ONLINE_USERS, USER_JOIN, USER_LEAVE, CHANGE_USERNAME, USER_ADD_ROLES, USER_REMOVE_ROLES, RECEIVE_GUEST_COUNT } from '../constants/actionTypes/users';

function updateUser(state, userID, update) {
  if (state[userID]) {
    var _objectSpread2;

    return _objectSpread({}, state, (_objectSpread2 = {}, _objectSpread2[userID] = update(state[userID]), _objectSpread2));
  }

  return state;
}

function guestsReducer(state, action) {
  if (state === void 0) {
    state = 0;
  }

  if (action === void 0) {
    action = {};
  }

  if (action.type === INIT_STATE) {
    return action.payload.guests;
  }

  if (action.type === RECEIVE_GUEST_COUNT) {
    return action.payload.guests;
  }

  return state;
}

function usersReducer(state, action) {
  var _objectSpread3;

  if (state === void 0) {
    state = {};
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;

  switch (type) {
    case LOAD_ONLINE_USERS:
      // this is merged in instead of replacing the state, because sometimes the
      // JOIN event from the current user comes in before the LOAD event, and then
      // the current user is sometimes excluded from the state. it looks like this
      // approach could cause problems, too, though.
      // TODO maybe replace state instead anyway and merge in the current user?
      return _objectSpread({}, state, indexBy(payload.users, '_id'));

    case USER_JOIN:
      return _objectSpread({}, state, (_objectSpread3 = {}, _objectSpread3[payload.user._id] = payload.user, _objectSpread3));

    case USER_LEAVE:
      return except(state, payload.userID);

    case CHANGE_USERNAME:
      return updateUser(state, payload.userID, function (user) {
        return _objectSpread({}, user, {
          username: payload.username
        });
      });

    case USER_ADD_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return _objectSpread({}, user, {
          roles: user.roles.concat(payload.roles)
        });
      });

    case USER_REMOVE_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return _objectSpread({}, user, {
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
