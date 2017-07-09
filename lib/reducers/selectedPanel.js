'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _panel = require('../constants/actionTypes/panel');

var initialState = 'chat';

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _panel.SELECT_PANEL:
      return payload.panel;
    default:
      return state;
  }
}
//# sourceMappingURL=selectedPanel.js.map
//# sourceMappingURL=selectedPanel.js.map
