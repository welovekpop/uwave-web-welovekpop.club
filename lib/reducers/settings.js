"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _settings = require("../constants/actionTypes/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Some people have >100% volumes stored in their localStorage settings
// because of a bug in üWave 1.4. This ensures that _everyone's_ volume
// is between 0 and 100.
function fixVolume(state) {
  if (state.volume < 0) return (0, _objectSpread2.default)({}, state, {
    volume: 0
  });
  if (state.volume > 100) return (0, _objectSpread2.default)({}, state, {
    volume: 100
  });
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
    case _settings.LOAD_SETTINGS:
      // Loading settings defaults to the initial state.
      return (0, _objectSpread2.default)({}, initialState, payload, {
        // Merge notification settings if we have new ones.
        // Needed if new notification types were added since the last time
        // settings were saved to localStorage.
        notifications: payload ? (0, _objectSpread2.default)({}, initialState.notifications, payload.notifications) : initialState.notifications
      });

    case _settings.CHANGE_SETTING:
      return (0, _deepmerge.default)(state, payload, {
        clone: true
      });

    default:
      return state;
  }
}

var _default = (0, _compose.default)(fixVolume, reduce); //# sourceMappingURL=settings.js.map


exports.default = _default;
//# sourceMappingURL=settings.js.map
