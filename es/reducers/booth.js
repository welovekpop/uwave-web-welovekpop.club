import _extends from "@babel/runtime/helpers/builtin/extends";
import { ADVANCE, ENTER_FULLSCREEN, EXIT_FULLSCREEN } from '../constants/ActionTypes';
var initialState = {
  historyID: null,
  media: null,
  djID: null,
  startTime: null,
  isFullscreen: false
};
export default function reduce(state, action) {
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
    case ADVANCE:
      if (payload) {
        return _extends({}, state, {
          historyID: payload.historyID,
          media: payload.media,
          djID: payload.userID,
          startTime: payload.timestamp
        });
      }

      return _extends({}, state, {
        historyID: null,
        media: null,
        djID: null,
        startTime: null
      });

    case ENTER_FULLSCREEN:
      return _extends({}, state, {
        isFullscreen: true
      });

    case EXIT_FULLSCREEN:
      return _extends({}, state, {
        isFullscreen: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=booth.js.map
