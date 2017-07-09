'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _settings = require('../constants/actionTypes/settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  language: null,
  mentionSound: true,
  muted: false,
  videoEnabled: true,
  videoSize: 'large',
  volume: 0,
  notifications: {
    userJoin: true,
    userLeave: true,
    userNameChanged: true
  }
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _settings.LOAD_SETTINGS:
      // Loading settings defaults to the initial state.
      return (0, _extends3.default)({}, initialState, payload);
    case _settings.CHANGE_SETTING:
      return (0, _deepmerge2.default)(state, payload, { clone: true });
    default:
      return state;
  }
}
//# sourceMappingURL=settings.js.map
//# sourceMappingURL=settings.js.map
