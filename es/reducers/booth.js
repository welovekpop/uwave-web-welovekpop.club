import _extends from 'babel-runtime/helpers/extends';
import { ADVANCE, ENTER_FULLSCREEN, EXIT_FULLSCREEN } from '../constants/actionTypes/booth';

var initialState = {
  historyID: null,
  media: null,
  djID: null,
  startTime: null,
  isFullscreen: false
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

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
