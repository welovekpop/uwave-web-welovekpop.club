"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _waitlist = require("../constants/actionTypes/waitlist");

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
    case _waitlist.WAITLIST_LOAD:
      return (0, _objectSpread2.default)({}, state, {
        waitlist: payload.waitlist,
        locked: payload.locked
      });

    case _waitlist.WAITLIST_LOCK:
      return (0, _objectSpread2.default)({}, state, {
        locked: payload.locked
      });

    case _waitlist.WAITLIST_CLEAR:
      return (0, _objectSpread2.default)({}, state, {
        waitlist: []
      });

    case _waitlist.WAITLIST_JOIN:
    case _waitlist.WAITLIST_LEAVE:
    case _waitlist.WAITLIST_UPDATE:
      return (0, _objectSpread2.default)({}, state, {
        waitlist: payload.waitlist
      });

    default:
      return state;
  }
} //# sourceMappingURL=waitlist.js.map
//# sourceMappingURL=waitlist.js.map
