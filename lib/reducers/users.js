'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

var _indexBy = require('index-by');

var _indexBy2 = _interopRequireDefault(_indexBy);

var _redux = require('redux');

var _auth = require('../constants/actionTypes/auth');

var _users = require('../constants/actionTypes/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateUser(state, userID, update) {
  if (state[userID]) {
    var _extends2;

    return (0, _extends5.default)({}, state, (_extends2 = {}, _extends2[userID] = update(state[userID]), _extends2));
  }
  return state;
}

function guestsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.type === _auth.INIT_STATE) {
    return action.payload.guests;
  }
  if (action.type === _users.RECEIVE_GUEST_COUNT) {
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
    case _users.LOAD_ONLINE_USERS:
      // this is merged in instead of replacing the state, because sometimes the
      // JOIN event from the current user comes in before the LOAD event, and then
      // the current user is sometimes excluded from the state. it looks like this
      // approach could cause problems, too, though.
      // TODO maybe replace state instead anyway and merge in the current user?
      return (0, _extends5.default)({}, state, (0, _indexBy2.default)(payload.users, '_id'));
    case _users.USER_JOIN:
      return (0, _extends5.default)({}, state, (_extends3 = {}, _extends3[payload.user._id] = payload.user, _extends3));
    case _users.USER_LEAVE:
      return (0, _except2.default)(state, payload.userID);
    case _users.CHANGE_USERNAME:
      return updateUser(state, payload.userID, function (user) {
        return (0, _extends5.default)({}, user, {
          username: payload.username
        });
      });
    case _users.USER_ADD_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return (0, _extends5.default)({}, user, {
          roles: [].concat(user.roles, payload.roles)
        });
      });
    case _users.USER_REMOVE_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return (0, _extends5.default)({}, user, {
          roles: user.roles.filter(function (role) {
            return payload.roles.indexOf(role) === -1;
          })
        });
      });
    default:
      return state;
  }
}

var reduce = (0, _redux.combineReducers)({
  guests: guestsReducer,
  users: usersReducer
});

exports.default = reduce;
//# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map
