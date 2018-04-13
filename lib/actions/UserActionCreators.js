"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUsers = setUsers;
exports.receiveGuestCount = receiveGuestCount;
exports.join = join;
exports.leave = leave;
exports.changeUsername = changeUsername;
exports.doChangeUsername = doChangeUsername;
exports.addUserRoles = addUserRoles;
exports.removeUserRoles = removeUserRoles;

var _users = require("../constants/actionTypes/users");

var _userSelectors = require("../selectors/userSelectors");

var _RequestActionCreators = require("./RequestActionCreators");

function setUsers(users) {
  return {
    type: _users.LOAD_ONLINE_USERS,
    payload: {
      users: users
    }
  };
}

function receiveGuestCount(guests) {
  return {
    type: _users.RECEIVE_GUEST_COUNT,
    payload: {
      guests: guests
    }
  };
}

function join(user) {
  return {
    type: _users.USER_JOIN,
    payload: {
      user: user,
      timestamp: Date.now()
    }
  };
}

function leave(id) {
  return function (dispatch, getState) {
    var user = (0, _userSelectors.usersSelector)(getState())[id];
    return dispatch({
      type: _users.USER_LEAVE,
      payload: {
        user: user,
        userID: id,
        timestamp: Date.now()
      }
    });
  };
}

function changeUsername(userID, username) {
  return function (dispatch, getState) {
    var user = (0, _userSelectors.usersSelector)(getState())[userID];
    return dispatch({
      type: _users.CHANGE_USERNAME,
      payload: {
        user: user,
        userID: userID,
        username: username,
        timestamp: Date.now()
      }
    });
  };
}

function doChangeUsername(username) {
  return function (dispatch, getState) {
    var user = (0, _userSelectors.currentUserSelector)(getState());
    return dispatch((0, _RequestActionCreators.put)("/users/" + user._id + "/username", {
      username: username
    }, {
      onStart: function onStart() {
        return {
          type: _users.DO_CHANGE_USERNAME_START,
          payload: {
            username: username
          }
        };
      },
      onComplete: function onComplete(_ref) {
        var data = _ref.data;
        return {
          type: _users.DO_CHANGE_USERNAME_COMPLETE,
          payload: {
            username: data.username
          }
        };
      },
      onError: function onError(error) {
        return {
          type: _users.DO_CHANGE_USERNAME_COMPLETE,
          error: true,
          payload: error,
          meta: {
            username: username
          }
        };
      }
    }));
  };
}

function addUserRoles(userID, roles) {
  return function (dispatch, getState) {
    var user = (0, _userSelectors.usersSelector)(getState())[userID];
    return dispatch({
      type: _users.USER_ADD_ROLES,
      payload: {
        user: user,
        userID: userID,
        roles: roles,
        timestamp: Date.now()
      }
    });
  };
}

function removeUserRoles(userID, roles) {
  return function (dispatch, getState) {
    var user = (0, _userSelectors.usersSelector)(getState())[userID];
    return dispatch({
      type: _users.USER_REMOVE_ROLES,
      payload: {
        user: user,
        userID: userID,
        roles: roles,
        timestamp: Date.now()
      }
    });
  };
} //# sourceMappingURL=UserActionCreators.js.map
//# sourceMappingURL=UserActionCreators.js.map
