import { OPEN_OVERLAY, CLOSE_OVERLAY, TOGGLE_OVERLAY } from '../constants/actionTypes/overlay';

var initialState = null;

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case OPEN_OVERLAY:
      return payload.overlay;
    case TOGGLE_OVERLAY:
      return state === payload.overlay ? null : payload.overlay;
    case CLOSE_OVERLAY:
      return null;
    default:
      return state;
  }
}
//# sourceMappingURL=activeOverlay.js.map
