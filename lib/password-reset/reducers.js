'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.errors = exports.config = exports.auth = undefined;
exports.passwordReset = passwordReset;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require('./constants');

var _auth2 = require('../reducers/auth');

var _auth3 = _interopRequireDefault(_auth2);

var _config2 = require('../reducers/config');

var _config3 = _interopRequireDefault(_config2);

var _errors2 = require('../reducers/errors');

var _errors3 = _interopRequireDefault(_errors2);

var _theme2 = require('../reducers/theme');

var _theme3 = _interopRequireDefault(_theme2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.auth = _auth3.default;
exports.config = _config3.default;
exports.errors = _errors3.default;
exports.theme = _theme3.default;
function passwordReset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.error) return state;

  switch (action.type) {
    case _constants.SET_RESET_KEY:
      return (0, _extends3.default)({}, state, {
        key: action.payload
      });
    case _constants.SET_RESET_SUCCESS:
      return (0, _extends3.default)({}, state, {
        success: true
      });

    default:
      return state;
  }
}
//# sourceMappingURL=reducers.js.map
//# sourceMappingURL=reducers.js.map
