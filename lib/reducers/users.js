'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

var _indexBy = require('index-by');

var _indexBy2 = _interopRequireDefault(_indexBy);

var _redux = require('redux');

var _auth = require('../constants/actionTypes/auth');

var _users = require('../constants/actionTypes/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var _extends2;

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
      return (0, _extends6.default)({}, state, (0, _indexBy2.default)(payload.users, '_id'));
    case _users.USER_JOIN:
      return (0, _extends6.default)({}, state, (_extends2 = {}, _extends2[payload.user._id] = payload.user, _extends2));
    case _users.USER_LEAVE:
      return (0, _except2.default)(state, payload.userID);
    case _users.CHANGE_USERNAME:
      if (state[payload.userID]) {
        var _extends3;

        return (0, _extends6.default)({}, state, (_extends3 = {}, _extends3[payload.userID] = (0, _extends6.default)({}, state[payload.userID], {
          username: payload.username
        }), _extends3));
      }
      return state;
    case _users.CHANGE_ROLE:
      if (state[payload.userID]) {
        var _extends4;

        return (0, _extends6.default)({}, state, (_extends4 = {}, _extends4[payload.userID] = (0, _extends6.default)({}, state[payload.userID], {
          role: payload.role
        }), _extends4));
      }
      return state;
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
