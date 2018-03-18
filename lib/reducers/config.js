'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _auth = require('../constants/actionTypes/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _auth.INIT_STATE:
      if (payload.roles) {
        return (0, _extends3.default)({}, state, {
          roles: payload.roles
        });
      }
      return state;
    default:
      return state;
  }
}
//# sourceMappingURL=config.js.map
//# sourceMappingURL=config.js.map
