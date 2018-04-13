import { OPEN_OVERLAY, CLOSE_OVERLAY, TOGGLE_OVERLAY } from '../constants/actionTypes/overlay';
var initialState = null;
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
