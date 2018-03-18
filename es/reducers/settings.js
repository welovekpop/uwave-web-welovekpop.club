import _extends from 'babel-runtime/helpers/extends';
import merge from 'deepmerge';
import { LOAD_SETTINGS, CHANGE_SETTING } from '../constants/actionTypes/settings';

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

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case LOAD_SETTINGS:
      // Loading settings defaults to the initial state.
      return _extends({}, initialState, payload, {
        // Merge notification settings if we have new ones.
        // Needed if new notification types were added since the last time
        // settings were saved to localStorage.
        notifications: payload ? _extends({}, initialState.notifications, payload.notifications) : initialState.notifications
      });
    case CHANGE_SETTING:
      return merge(state, payload, { clone: true });
    default:
      return state;
  }
}
//# sourceMappingURL=settings.js.map
