'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _settings = require('../constants/actionTypes/settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Some people have >100% volumes stored in their localStorage settings
// because of a bug in üWave 1.4. This ensures that _everyone's_ volume
// is between 0 and 100.
function fixVolume(state) {
  if (state.volume < 0) return (0, _extends3.default)({}, state, { volume: 0 });
  if (state.volume > 100) return (0, _extends3.default)({}, state, { volume: 100 });
  return state;
}

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
    userNameChanged: true,
    skip: true
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
      return (0, _extends3.default)({}, initialState, payload, {
        // Merge notification settings if we have new ones.
        // Needed if new notification types were added since the last time
        // settings were saved to localStorage.
        notifications: payload ? (0, _extends3.default)({}, initialState.notifications, payload.notifications) : initialState.notifications
      });
    case _settings.CHANGE_SETTING:
      return (0, _deepmerge2.default)(state, payload, { clone: true });
    default:
      return state;
  }
}

exports.default = (0, _compose2.default)(fixVolume, reduce);
//# sourceMappingURL=settings.js.map
//# sourceMappingURL=settings.js.map
