import { SELECT_PANEL } from '../constants/ActionTypes';
var initialState = 'chat';
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
    case SELECT_PANEL:
      return payload.panel;

    default:
      return state;
  }
}
//# sourceMappingURL=selectedPanel.js.map
