import { SELECT_PANEL } from '../constants/actionTypes/panel';

var initialState = 'chat';

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case SELECT_PANEL:
      return payload.panel;
    default:
      return state;
  }
}
//# sourceMappingURL=selectedPanel.js.map
