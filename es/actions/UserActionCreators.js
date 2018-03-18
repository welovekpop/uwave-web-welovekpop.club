import { LOAD_ONLINE_USERS, USER_JOIN, USER_LEAVE, CHANGE_USERNAME, USER_ADD_ROLES, USER_REMOVE_ROLES, RECEIVE_GUEST_COUNT, DO_CHANGE_USERNAME_START, DO_CHANGE_USERNAME_COMPLETE } from '../constants/actionTypes/users';
import { currentUserSelector, usersSelector } from '../selectors/userSelectors';
import { put } from './RequestActionCreators';

export function setUsers(users) {
  return {
    type: LOAD_ONLINE_USERS,
    payload: { users: users }
  };
}

export function receiveGuestCount(guests) {
  return {
    type: RECEIVE_GUEST_COUNT,
    payload: { guests: guests }
  };
}

export function join(user) {
  return {
    type: USER_JOIN,
    payload: {
      user: user,
      timestamp: Date.now()
    }
  };
}

export function leave(id) {
  return function (dispatch, getState) {
    var user = usersSelector(getState())[id];
    return dispatch({
      type: USER_LEAVE,
      payload: {
        user: user,
        userID: id,
        timestamp: Date.now()
      }
    });
  };
}

export function changeUsername(userID, username) {
  return function (dispatch, getState) {
    var user = usersSelector(getState())[userID];
    return dispatch({
      type: CHANGE_USERNAME,
      payload: {
        user: user,
        userID: userID,
        username: username,
        timestamp: Date.now()
      }
    });
  };
}

export function doChangeUsername(username) {
  return function (dispatch, getState) {
    var user = currentUserSelector(getState());

    return dispatch(put('/users/' + user._id + '/username', { username: username }, {
      onStart: function onStart() {
        return {
          type: DO_CHANGE_USERNAME_START,
          payload: { username: username }
        };
      },
      onComplete: function onComplete(_ref) {
        var data = _ref.data;
        return {
          type: DO_CHANGE_USERNAME_COMPLETE,
          payload: { username: data.username }
        };
      },
      onError: function onError(error) {
        return {
          type: DO_CHANGE_USERNAME_COMPLETE,
          error: true,
          payload: error,
          meta: { username: username }
        };
      }
    }));
  };
}

export function addUserRoles(userID, roles) {
  return function (dispatch, getState) {
    var user = usersSelector(getState())[userID];
    return dispatch({
      type: USER_ADD_ROLES,
      payload: {
        user: user,
        userID: userID,
        roles: roles,
        timestamp: Date.now()
      }
    });
  };
}

export function removeUserRoles(userID, roles) {
  return function (dispatch, getState) {
    var user = usersSelector(getState())[userID];
    return dispatch({
      type: USER_REMOVE_ROLES,
      payload: {
        user: user,
        userID: userID,
        roles: roles,
        timestamp: Date.now()
      }
    });
  };
}
//# sourceMappingURL=UserActionCreators.js.map
