"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _except = _interopRequireDefault(require("except"));

var _indexBy = _interopRequireDefault(require("index-by"));

var _redux = require("redux");

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateUser(state, userID, update) {
  if (state[userID]) {
    var _extends2;

    return (0, _extends4.default)({}, state, (_extends2 = {}, _extends2[userID] = update(state[userID]), _extends2));
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

  if (action.type === _ActionTypes.INIT_STATE) {
    return action.payload.guests;
  }

  if (action.type === _ActionTypes.RECEIVE_GUEST_COUNT) {
    return action.payload.guests;
  }

  return state;
}

function usersReducer(state, action) {
  var _extends3;

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
    case _ActionTypes.INIT_STATE: // fall through

    case _ActionTypes.LOAD_ONLINE_USERS:
      // this is merged in instead of replacing the state, because sometimes the
      // JOIN event from the current user comes in before the LOAD event, and then
      // the current user is sometimes excluded from the state. it looks like this
      // approach could cause problems, too, though.
      // TODO maybe replace state instead anyway and merge in the current user?
      return (0, _extends4.default)({}, state, (0, _indexBy.default)(payload.users, '_id'));

    case _ActionTypes.USER_JOIN:
      return (0, _extends4.default)({}, state, (_extends3 = {}, _extends3[payload.user._id] = payload.user, _extends3));

    case _ActionTypes.USER_LEAVE:
      return (0, _except.default)(state, payload.userID);

    case _ActionTypes.CHANGE_USERNAME:
      return updateUser(state, payload.userID, function (user) {
        return (0, _extends4.default)({}, user, {
          username: payload.username
        });
      });

    case _ActionTypes.USER_ADD_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return (0, _extends4.default)({}, user, {
          roles: user.roles.concat(payload.roles)
        });
      });

    case _ActionTypes.USER_REMOVE_ROLES:
      return updateUser(state, payload.userID, function (user) {
        return (0, _extends4.default)({}, user, {
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
var _default = reduce;
exports.default = _default;
//# sourceMappingURL=users.js.map
