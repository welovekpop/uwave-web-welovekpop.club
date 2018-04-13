"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _panel = require("../constants/actionTypes/panel");

var initialState = 'chat';

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
    case _panel.SELECT_PANEL:
      return payload.panel;

    default:
      return state;
  }
} //# sourceMappingURL=selectedPanel.js.map
//# sourceMappingURL=selectedPanel.js.map
