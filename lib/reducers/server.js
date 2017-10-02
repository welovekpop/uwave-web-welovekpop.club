'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serverReducer;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  connected: false
};

function serverReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;

  switch (type) {
    case _ActionTypes.SOCKET_CONNECTED:
      return (0, _extends3.default)({}, state, { connected: true });
    case _ActionTypes.SOCKET_DISCONNECTED:
      return (0, _extends3.default)({}, state, { connected: false });
    default:
      return state;
  }
}
//# sourceMappingURL=server.js.map
//# sourceMappingURL=server.js.map
