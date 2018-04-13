"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _auth = require("../constants/actionTypes/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

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
    case _auth.INIT_STATE:
      if (payload.roles) {
        return (0, _objectSpread2.default)({}, state, {
          roles: payload.roles
        });
      }

      return state;

    default:
      return state;
  }
} //# sourceMappingURL=config.js.map
//# sourceMappingURL=config.js.map
