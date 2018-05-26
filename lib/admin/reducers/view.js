"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _ActionTypes = require("../constants/ActionTypes");

function reducer(state, action) {
  if (state === void 0) {
    state = 'main';
  }

  if (action.type === _ActionTypes.TRANSITION) {
    return action.payload;
  }

  return state;
}
//# sourceMappingURL=view.js.map
