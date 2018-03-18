'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _ActionTypes = require('../constants/ActionTypes');

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
  var action = arguments[1];

  if (action.type === _ActionTypes.TRANSITION) {
    return action.payload;
  }
  return state;
}
//# sourceMappingURL=view.js.map
//# sourceMappingURL=view.js.map
