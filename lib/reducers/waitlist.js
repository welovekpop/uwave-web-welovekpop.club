'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _waitlist = require('../constants/actionTypes/waitlist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  waitlist: [],
  locked: false
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _waitlist.WAITLIST_LOAD:
      return (0, _extends3.default)({}, state, {
        waitlist: payload.waitlist,
        locked: payload.locked
      });
    case _waitlist.WAITLIST_LOCK:
      return (0, _extends3.default)({}, state, {
        locked: payload.locked
      });
    case _waitlist.WAITLIST_CLEAR:
      return (0, _extends3.default)({}, state, {
        waitlist: []
      });
    case _waitlist.WAITLIST_JOIN:
    case _waitlist.WAITLIST_LEAVE:
    case _waitlist.WAITLIST_UPDATE:
      return (0, _extends3.default)({}, state, {
        waitlist: payload.waitlist
      });
    default:
      return state;
  }
}
//# sourceMappingURL=waitlist.js.map
//# sourceMappingURL=waitlist.js.map
