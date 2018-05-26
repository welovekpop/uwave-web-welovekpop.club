"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordReset = passwordReset;
Object.defineProperty(exports, "auth", {
  enumerable: true,
  get: function () {
    return _auth2.default;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config2.default;
  }
});
Object.defineProperty(exports, "errors", {
  enumerable: true,
  get: function () {
    return _errors2.default;
  }
});
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function () {
    return _theme2.default;
  }
});

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _constants = require("./constants");

var _auth2 = _interopRequireDefault(require("../reducers/auth"));

var _config2 = _interopRequireDefault(require("../reducers/config"));

var _errors2 = _interopRequireDefault(require("../reducers/errors"));

var _theme2 = _interopRequireDefault(require("../reducers/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function passwordReset(state, action) {
  if (state === void 0) {
    state = {};
  }

  if (action === void 0) {
    action = {};
  }

  if (action.error) return state;

  switch (action.type) {
    case _constants.SET_RESET_KEY:
      return (0, _extends2.default)({}, state, {
        key: action.payload
      });

    case _constants.SET_RESET_SUCCESS:
      return (0, _extends2.default)({}, state, {
        success: true
      });

    default:
      return state;
  }
}
//# sourceMappingURL=reducers.js.map
