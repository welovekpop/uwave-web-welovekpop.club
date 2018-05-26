"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  waitlist: [],
  locked: false
};

function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;

  switch (type) {
    case _ActionTypes.INIT_STATE:
      return (0, _extends2.default)({}, state, {
        waitlist: payload.waitlist,
        locked: payload.waitlistLocked
      });

    case _ActionTypes.WAITLIST_LOAD:
      return (0, _extends2.default)({}, state, {
        waitlist: payload.waitlist,
        locked: payload.locked
      });

    case _ActionTypes.WAITLIST_LOCK:
      return (0, _extends2.default)({}, state, {
        locked: payload.locked
      });

    case _ActionTypes.WAITLIST_CLEAR:
      return (0, _extends2.default)({}, state, {
        waitlist: []
      });

    case _ActionTypes.WAITLIST_JOIN:
    case _ActionTypes.WAITLIST_LEAVE:
    case _ActionTypes.WAITLIST_UPDATE:
      return (0, _extends2.default)({}, state, {
        waitlist: payload.waitlist
      });

    default:
      return state;
  }
}
//# sourceMappingURL=waitlist.js.map
