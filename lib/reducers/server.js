"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serverReducer;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _ActionTypes = require("../constants/ActionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  connected: false
};

function serverReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type;

  switch (type) {
    case _ActionTypes.SOCKET_CONNECTED:
      return (0, _objectSpread2.default)({}, state, {
        connected: true
      });

    case _ActionTypes.SOCKET_DISCONNECTED:
      return (0, _objectSpread2.default)({}, state, {
        connected: false
      });

    default:
      return state;
  }
} //# sourceMappingURL=server.js.map
//# sourceMappingURL=server.js.map
